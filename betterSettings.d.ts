declare const settingType = {
    COLOR: [0, "#ff0000"],
    TEXT: [1, ""],
    NUMBER: [2, 0],
    BOOLEAN: [3, false],
    SELECT: [4, null]
}

/** 
 * The type for a setting. Manually set the generic when extending, but don't change it when just
 * using the builtin one from betterSettings.js
 */
declare class Setting<V = string | number | boolean | never[]> {
    name: string
    storageName: string
    type: typeof settingType[keyof typeof settingType]
    disabled: boolean
    defaultValue: V
    description: string
    validate: (V) => boolean
    value: V

    /**
     * The constructor
     * 
     * @param name The name of the setting
     * @param storageName The name of the setting in localStorage
     * @param type The type of the setting (an item in settingType)
     * @param disabled Whether the setting is disabled or not
     * @param defaultValue The default value for the setting
     * @param description The description of the setting
     * @param customValidator A custom validator for the value
     */
    constructor (
        name: string, 
        storageName: string, 
        type?: typeof settingType[keyof typeof settingType], 
        disabled?: boolean = false, 
        defaultValue?: V = null, 
        description?: string = "", 
        customValidator?: (value: V) => boolean = () => true
    );

    /** Updates the localStorage key for the setting */
    update()

    /** 
     * Sets the value of the setting 
     * 
     * @param value The value to set to
     */
    set(value: V);

    /** 
     * Gets the value of the setting 
     *
     * @returns The value of the setting 
     */
    get(): V;

    /** Enables the setting */
    enable();
    
    /** Disables the setting */
    disable();

    /** 
     * Adds a callback to run every time {@link set} is called 
     * 
     * @param callback The callback to run
     */
    onUpdate(callback: (V) => void);

    /** 
     * The to build the DOM elements for the setting 
     * 
     * @returns The HTML element for the setting
     */
    build(): HTMLElement;
}

/** The type for a dropdown menu */
declare class SelectSetting<T> extends Setting<T> {
    /**
     * The constructor.
     * 
     * @param name The name for the setting.
     * @param storageName The name of the setting in localStorage.
     * @param values The values to have. Each pair is in the form of `[<text>, <value>]`.
     * @param [defaultValue=null] The default value to have.
     * @param [disabled=false] Whether to disable the setting or not.
     */
    constructor(
        name: string, 
        storageName: string, 
        values: [string, T][], 
        disabled: boolean = false, 
        defaultValue: T | null = null
    )
}

class SettingsTab {
    /**
     * The constructor.
     * 
     * @param tabName The name for the tab to be created
     */
    constructor(tabName: string)

    /** 
     * Registers a {@link Setting} into the tab
     * 
     * @param setting The setting to register
     * @param category The category to register the setting into
     */
    registerSetting(setting: Setting, category: string = "General")

    /** 
     * Registers a set of settings into a given category.
     * 
     * This calls {@link registerSetting} on each setting provided
     * 
     * @param category The category to put the settings into
     * @param settings The settings to add
     */
    registerSettings(category: string = "General", ...settings: Setting<unknown>[])

    /**
     * Replaces the {@link Setting} object of a given setting (by {@link Setting.storageName storageName})
     * 
     * @param name The storage name of the setting to replace
     * @param value The value to replace it with
     */
    set<V>(name: string, value: Setting<V>)

    /**
     * Gets a {@link Setting} within the tab based on its {@link Setting.storageName storageName}.
     * 
     * @param name The storageName of the setting
     */
    get<V>(name: string): Setting<V>

    /**
     * The function that generates the HTML elements of the tab. Called by {@link SettingsManager}
     * when it's injecting HTML/CSS
     */
    build(): HTMLElement
}

/** The settings manager singleton. This should be used through {@link settingsManager}. */
class SettingsManager {
    /** The map of setting tabs stored */
    settings: Map<string, SettingsTab>

    /** The constructor. Generates an empty SettingsManager */
    constructor()

    /** 
     * Registers a tab
     * 
     * @param settingsTab The settings tab to register
     */
    registerTab(settingsTab: SettingsTab)

    /** 
     * Gets the map settings 
     * 
     * @returns The map of settings
     */
    getSettings(): SettingsManager.settings
}

declare const settingsManager: SettingsManager