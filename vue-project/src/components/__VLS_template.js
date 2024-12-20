import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './Modal.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'modal'?: boolean; } &
{ 'backdrop'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {};
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
{
const __VLS_0 = __VLS_intrinsicElements["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{ onClick: {} as any, }, class: ("backdrop"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("backdrop"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
let __VLS_5 = { 'click': __VLS_pickEvent(__VLS_4['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_1, typeof __VLS_2>).onClick) };
__VLS_5 = { click: (__VLS_ctx.closeModal) };
{
const __VLS_6 = __VLS_intrinsicElements["div"];
const __VLS_7 = __VLS_elementAsFunctionalComponent(__VLS_6);
const __VLS_8 = __VLS_7({ ...{}, class: ("modal"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_6, typeof __VLS_8> & Record<string, unknown>) => void)({ ...{}, class: ("modal"), });
const __VLS_9 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8)!;
let __VLS_10!: __VLS_NormalizeEmits<typeof __VLS_9.emit>;
({ sale: __VLS_ctx.theme === 'sale' });
__VLS_styleScopedClasses = ({ sale: theme === 'sale' });
{
const __VLS_11 = ({} as 'Slot' extends keyof typeof __VLS_ctx ? { 'slot': typeof __VLS_ctx.Slot; } : 'slot' extends keyof typeof __VLS_ctx ? { 'slot': typeof __VLS_ctx.slot; } : typeof __VLS_resolvedLocalAndGlobalComponents).slot;
const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({ ...{}, }));
const __VLS_13 = __VLS_12({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_12));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_11, typeof __VLS_13> & Record<string, unknown>) => void)({ ...{}, });
var __VLS_14 = {};
}
(__VLS_9.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["backdrop"];
__VLS_styleScopedClasses["modal"];
}
var __VLS_slots!: {
default?(_: typeof __VLS_14): any;
};
// @ts-ignore
[closeModal, theme,];
return __VLS_slots;
}
