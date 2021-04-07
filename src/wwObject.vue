<template>
    <div class="ww-expand">
        <div class="toggle-container" @click="toggleContent">
            <div class="unactive-toggle" v-if="!isVisible || editLayout">
                <div class="label unactive label-xs normal" v-if="editLayout">closed</div>
                <wwLayout
                    class="layout toggle-layout"
                    :class="{ isEditing: isEditing }"
                    path="activeToggleLayout"
                ></wwLayout>
            </div>

            <div class="active-toggle" v-if="isVisible || editLayout">
                <div class="label active label-xs normal" v-if="editLayout">opened</div>
                <wwLayout class="layout toggle-layout" :class="{ isEditing: isEditing }" path="toggleLayout"></wwLayout>
            </div>
        </div>
        <wwExpandTransition transitionFunction="ease">
            <div class="content" v-show="isVisible || isEditing">
                <div class="label content label-xs normal" v-if="editLayout">content</div>
                <wwLayout
                    class="layout content-layout"
                    :class="{ isEditing: isEditing }"
                    path="contentLayout"
                ></wwLayout>
            </div>
        </wwExpandTransition>
    </div>
</template>

<script>
import wwExpandTransition from './wwExpandTransition.vue';
export default {
    name: '__COMPONENT_NAME__',
    components: { wwExpandTransition },
    props: {
        content: Object,
        /* wwEditor:start */
        wwEditorState: Object,
        /* wwEditor:end */
    },
    wwDefaultContent: {
        toggleLayout: [],
        activeToggleLayout: [],
        contentLayout: [],
    },
    data() {
        return {
            isVisible: false,
            editLayout: false,
        };
    },
    watch: {
        isEditing() {
            this.editLayout = false;
        },
    },
    computed: {
        isEditing() {
            /* wwEditor:start */
            return this.wwEditorState.editMode === wwLib.wwEditorHelper.EDIT_MODES.EDITION;
            /* wwEditor:end */
            // eslint-disable-next-line no-unreachable
            return false;
        },
    },
    methods: {
        toggleContent() {
            if (this.isEditing) return;
            this.isVisible = !this.isVisible;
        },
        /* wwEditor:start */
        toggleEdit() {
            this.$emit('update', { editLayout: !this.editLayout });
        },
        /* wwEditor:end */
    },
    mounted() {
        if (this.editLayout) this.$emit('update', { editLayout: false });
    },
    beforeDestroy() {
        if (this.editLayout) this.$emit('update', { editLayout: false });
    },
};
</script>

<style lang="scss" scoped>
.ww-expand {
    .active-toggle,
    .unactive-toggle,
    .content {
        position: relative;

        .layout {
            display: flex;
            flex-direction: column;

            &.isEditing {
                min-height: 50px;
                border: 1px dashed var(--ww-color-dark-500);
            }
        }

        .label {
            position: absolute;
            top: 0;
            right: 0;

            padding: var(--ww-spacing-00) var(--ww-spacing-01);
            border-bottom-left-radius: var(--ww-spacing-00);
            z-index: 101;
            color: white;

            &.unactive {
                background-color: var(--ww-color-dark-500);
            }
            &.active {
                background-color: var(--ww-color-green-500);
            }
            &.content {
                background-color: var(--ww-color-blue-500);
            }
        }
    }
}
</style>
