/**
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 */

const { createKarmaConfig } = require("@blueprintjs/karma-build-scripts");

module.exports = function (config) {
    const coverageExcludes = [
        // not worth full coverage
        "src/accessibility/*",
        "src/common/abstractComponent*",
        "src/common/abstractPureComponent*",
        "src/compatibility/*",

        // HACKHACK: for karma upgrade only
        "src/common/refs.ts",

        // HACKHACK: need to add hotkeys v2 tests
        "src/components/hotkeys/hotkeysDialog2.tsx",
        "src/components/hotkeys/hotkeysTarget2.tsx",
        "src/context/hotkeys/hotkeysProvider.tsx",

        // HACKHACK: see https://github.com/palantir/blueprint/issues/5511
        "src/components/portal/portal2.tsx",
        "src/context/portal/portalProvider.tsx",
    ];

    const baseConfig = createKarmaConfig({
        dirname: __dirname,
        coverageExcludes,
    });
    config.set(baseConfig);
    config.set({
        // overrides here
    });
};
