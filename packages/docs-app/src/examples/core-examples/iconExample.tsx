/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from "react";

import { H5, Icon, IconSize, Intent, Label, Slider } from "@blueprintjs/core";
import { Example, ExampleProps, handleValueChange } from "@blueprintjs/docs-theme";
import { IconName } from "@blueprintjs/icons";

import { IconSelect } from "./common/iconSelect";
import { IntentSelect } from "./common/intentSelect";

export interface IIconExampleState {
    icon: IconName;
    iconSize: number;
    intent: Intent;
}

export class IconExample extends React.PureComponent<ExampleProps, IIconExampleState> {
    public state: IIconExampleState = {
        icon: "calendar",
        iconSize: IconSize.STANDARD,
        intent: Intent.NONE,
    };

    private handleIntentChange = handleValueChange((intent: Intent) => this.setState({ intent }));

    private handleIconSizeChange = (iconSize: number) => this.setState({ iconSize });

    private handleIconNameChange = (icon: IconName) => this.setState({ icon });

    private iconSizeLabelId = "icon-size-label";

    public render() {
        const { icon, iconSize, intent } = this.state;

        const options = (
            <>
                <H5>Props</H5>
                <IconSelect iconName={icon} onChange={this.handleIconNameChange} />
                <IntentSelect intent={this.state.intent} onChange={this.handleIntentChange} />
                <Label id={this.iconSizeLabelId}>Icon size</Label>
                <Slider
                    labelStepSize={MAX_ICON_SIZE / 5}
                    min={0}
                    max={MAX_ICON_SIZE}
                    showTrackFill={false}
                    value={iconSize}
                    onChange={this.handleIconSizeChange}
                    handleHtmlProps={{ "aria-labelledby": this.iconSizeLabelId }}
                />
            </>
        );

        return (
            <Example options={options} {...this.props}>
                <Icon icon={icon} size={iconSize} intent={intent} />
            </Example>
        );
    }
}

const MAX_ICON_SIZE = 100;
