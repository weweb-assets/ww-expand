export default {
    editor: {
        label: {
            en: 'Expand layout',
        },
    },
    properties: {
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
    },
};
