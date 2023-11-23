export default {
    editor: {
        label: {
            en: 'Accordion',
            fr: 'Accordion',
        },
    },
    properties: {
        value: {
            label: {
                en: 'Init value',
            },
            type: 'OnOff',
            section: 'settings',
            bindable: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'boolean',
                tooltip: 'A boolean that defines the initial value: `true | false`',
            },
            /* wwEditor:end */
        },
        toggleLayout: {
            hidden: true,
            defaultValue: [],
        },
        activeToggleLayout: {
            hidden: true,
            defaultValue: [],
        },
        contentLayout: {
            hidden: true,
            defaultValue: [],
        },
        toggleEdit: {
            type: 'Button',
            section: 'settings',
            editorOnly: true,
            options: {
                text: { en: 'Toggle edition', fr: 'Toggle edition' },
                color: 'blue',
                action: 'toggleEdit',
            },
        },
    },
};
