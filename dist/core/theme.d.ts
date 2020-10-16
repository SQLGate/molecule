export interface ThemeColor extends Object {
    id?: string;
}
export interface TokenColor extends Object {
    name?: string;
    scope?: string | string[];
    settings?: object;
}
export interface ITheme {
    /**
     * The id of component, theme will be applied by this ID
     */
    id: string;
    name: string;
    colors?: ThemeColor;
    tokenColors?: TokenColor[];
    /**
     * The semanticTokenColors mappings as well as
     * the semanticHighlighting setting
     * allow to enhance the highlighting in the editor
     * More info visit: https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide
     */
    semanticHighlighting?: boolean;
}
