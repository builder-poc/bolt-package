# Bolt Package (Builder PoC)

This repository provides a **prebuilt distribution of the Bolt Design System (v7)** for use with **Builder.io**.

It contains the compiled Bolt **JavaScript bundle** and **CSS styles**, allowing Builder to render Bolt web components without requiring the full Bolt build pipeline.

This package is intended for **runtime usage only** and does not include Bolt source files, SCSS, tokens, or build scripts.

---

# Installation

Install the package directly from GitHub using the tagged release.

```bash
npm install git+https://github.com/builder-poc/bolt-package.git#7.0.0
```

---

# Usage

Import the Bolt bundle and styles before rendering Bolt components.

```javascript
import * as Bolt from "@builder-poc/bolt-package/bundle-core";
import "@builder-poc/bolt-package/css-core";

Bolt.initialize();
```

This will:

1. Load the Bolt web component bundle
2. Load the Bolt styles
3. Register all Bolt components with the browser

After initialization, Bolt components can be used normally.

Example:

```html
<bolt-textfield label="Name"></bolt-textfield>
```

---

# Package Structure

This package only contains compiled runtime assets.

```
dist/
  bundle-core/
    bolt-core.mjs
    bolt-core.module.js
    bolt-core.d.ts

  css/
    bolt-core.css
    bolt-core-debug.css
```

Source files such as:

- SCSS
- tokens
- build scripts
- test files

are intentionally **not included**.

---

# Important Notes

### Do not import individual components

Bolt components are registered through the bundle.

❌ Incorrect usage:

```javascript
import "@builder-poc/bolt-package/textfield"
```

✅ Correct usage:

```javascript
import * as Bolt from "@builder-poc/bolt-package/bundle-core"
import "@builder-poc/bolt-package/css-core"

Bolt.initialize()
```

---

### Initialization is required

Bolt 7 requires explicit initialization:

```javascript
Bolt.initialize()
```

Without this step, components will not upgrade and Shadow DOM will not be created.

---

# AI Usage Guidance

For AI tools such as **Builder Fusion, Copilot, or LLM code generators**, always use the following pattern:

```javascript
import * as Bolt from "@builder-poc/bolt-package/bundle-core";
import "@builder-poc/bolt-package/css-core";

Bolt.initialize();
```

Do **not** generate imports such as:

```
@builder-poc/bolt-package/textfield
@builder-poc/bolt-package/button
@builder-poc/bolt-package/select
```

Bolt components are registered automatically through the **bundle import**, not through individual component modules.

---

# Purpose of this Repository

This repository exists to provide a **lightweight runtime package for Builder experimentation**.

The official Bolt repository contains:

- source code
- SCSS tokens
- build tooling
- tests
- development packages

This repo instead provides a **compiled distribution** suitable for Builder environments.

---

# Versioning

This package mirrors the Bolt version used during compilation.

Example:

```
7.0.0
```

Future updates should follow the same pattern when the Bolt bundle is updated.

---

# Maintainers

Nationwide Design System Team
