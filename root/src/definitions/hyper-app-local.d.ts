// declare module '*'; // to allow importation of all modules without type definitions

// declare module 'foo'; // to allow importation of a specific module without type definitions

/* To add own declaration for module
declare module 'foo' {
    export function getRandomNumber(): number
} 
*/

// declare module 'hyperapp'

declare module 'hyper-app-local' {

    // export as namespace hyperapp;

    /** @namespace [VDOM] */

    /** The VDOM representation of an Element.
     *
     * @memberOf [VDOM]
     */
    export interface VNode<Attributes = {}> {
        name: string;
        props?: Attributes;
        children: Array<VNode | string>;
        // key: string | number | null;
    }

    /** A Component is a function that returns a custom VNode or View.
     *
     * @memberOf [VDOM]
     */
    export interface Component<Attributes = {}, State = {}, Actions = {}> {
        (attributes: Attributes, children: Array<VNode | string>):
            | VNode<Attributes>
            | View<State, Actions>;
    }

    /**
     * Possibles children types
     */
    export type Children = VNode | string | number | null;

    /** The soft way to create a VNode.
     * @param name      An element name or a Component function
     * @param attributes     Any valid HTML atributes, events, styles, and meta data
     * @param children  The children of the VNode
     * @returns A VNode tree.
     *
     * @memberOf [VDOM]
     */
    
    export function h<Attributes>(
        nodeName: Component<Attributes, any, any> | string,
        attributes?: Attributes,
        ...children: Array<Children | Children[]>
    ): VNode<Attributes>;

    export function consign(
        action: any,
        props: any
    ): any;

    /** @namespace [App] */

    /** The result of an action.
     *
     * @memberOf [App]
     */
    export type ActionResult<State> = Partial<State> | Promise<any> | null | void;

    /** The interface for a single action implementation.
     *
     * @memberOf [App]
     */
    export type ActionType<Data, State, Actions> = (
        data?: Data
    ) =>
        | ((state: State, actions: Actions) => ActionResult<State>)
        | ActionResult<State>;

    /** The interface for the actions tree implementation.
     *
     * @memberOf [App]
     */
    export type ActionsType<State, Actions> = {
        [P in keyof Actions]:
        | ActionType<any, State, Actions>
        | ActionsType<any, Actions[P]>
    };

    /** The view function describes the application UI as a tree of VNodes.
     * @returns A VNode tree.
     * @memberOf [App]
     */
    export interface View<State, Actions> {
        (state: State, actions: Actions): VNode<object> | null;
    }

    /** The app() call creates and renders a new application.
     *
     * @param state The state object.
     * @param actions The actions object implementation.
     * @param view The view function.
     * @param container The DOM element where the app will be rendered to.
     * @returns The actions wired to the application.
     * @memberOf [App]
     */

    export type AppParam = {
        node: HTMLElement | null,
        init: () => any,
        view: (state: any) => VNode,
        subscriptions: (state: any) => any,
        onEnd: () => void
    }

    export function app(param: AppParam): any;

    /** @namespace [JSX] */

    // declare global {
    //     namespace JSX {
    //         interface Element extends VNode<any> { }
    //         interface IntrinsicElements {
    //             [elemName: string]: any;
    //         }
    //     }
    // }
}