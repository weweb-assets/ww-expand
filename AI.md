---
name: ww-expand
description: Accordion-style interface element that toggles content visibility with a button or clickable area, featuring transition animations and customizable layouts for both collapsed and expanded states.
keywords: accordion component, expand collapse, toggle button, transition animations, content area, initial value, toggle layout, active toggle layout, content layout, editor mode
---

#### ww-expand

***Purpose:***
Accordion-style component that hides/reveals content via expand/collapse state with toggle button and animated transitions.

***Properties:***
- value: boolean - Initial expand/collapse state. Default: false.

***Slots:***
- toggleLayout: any[] - Components for toggle container area when expanded
- activeToggleLayout: any[] - Components for toggle container area closed expanded (requires all styles from toggleLayout)
- contentLayout: any[] - Components for content area

***Exposed Variables:***
- value: boolean - Current expand state of the component

***Events:***
- change: Triggered when expand state changes via user interaction. Payload: {domEvent: Event, value: boolean}
- initValueChange: Triggered when initial value changes. Payload: {value: boolean}

***Notes:***
All 3 slots are required.
Be careful : toggleLayout is for EXPANDED toggle container and activeToggleLayout is for CLOSED toggle container
