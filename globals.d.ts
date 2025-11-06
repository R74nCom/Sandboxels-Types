// Current file made by Cube14
// If you have some stuff i missed go ahead and add it
/**
 * Represents a single pixel in the game.
 */
interface Pixel {
    /** X coordinate of the pixel */
    x: number;
    /** Y coordinate of the pixel */
    y: number;
    /** The element type of the pixel */
    element: string;
    /** The color of the pixel, usually in RGB but can be hex */
    color: string;
    /** Opacity of the pixel (0 = fully transparent, 1 = fully opaque) */
    alpha?: number;

    /** Current temperature of the pixel */
    temp: number;
    /** Starting temperature of the pixel */
    start: number;

    /** Whether the pixel is currently burning */
    burning?: boolean;
    /** Time when burning started */
    burnStart?: number;

    /** Charge level of the pixel */
    charge?: number;

    /** Whether the pixel is flipped horizontally */
    flipX?: boolean;
    /** Whether the pixel is flipped vertically */
    flipY?: boolean;
    /** Rotation of the pixel (radians or degrees depending on context) */
    r?: number;

    /**
     * Any additional custom properties.
     * Allows dynamic data storage for mods.
     */
    [key: string]: any;
}

/**
 * Creates a pixel at coordinates (x, y)
 * @param element - The name of an element
 * @param x - x coordinate of pixel
 * @param y - y coordinate of pixel
 * @throws {TypeError} If coordinates are out of bounds
 * @example 
 * ```js
 * createPixel("wood", 10, 10);
 * ```
 */
declare function createPixel(element: string[] | string, x: number, y: number): void
/**
 * Deletes a pixel at coordinates (x, y) 
 * @param x - x coordinate of pixel
 * @param y - y coordinate of pixel
 * @example
 * ```js
 * deletePixel(20, 20);
 * ```
 */
declare function deletePixel(x: number, y: number): void
/**
 * Returns the pixel at the given coordinates.
 * @param x - The x coordinate of the pixel.
 * @param y - The y coordinate of the pixel.
 * @returns The `Pixel` object at the coordinates, or `null` if none exists.
 * @example
 * ```js
 * let pixel = getPixel(2, 15);
 * // pixel is either a Pixel object or null
 * ```
 */
declare function getPixel(x: number, y: number): Pixel | null;
/**
 * Changes the element of an existing pixel at coordinates (x, y)
 * @param pixel - The pixel being changed
 * @param element - The new element
 * @param changetemp - If the pixels temperature should change to be default temprature
 * @example
 * ```js
 * let pixel = getPixel(12, 12); // Get a pixel at 12, 12
 * changePixel(pixel, "ice", false); // Change that pixel to a ice pixel without changing temperature
 * ```
 */
declare function changePixel(pixel: Pixel, element: string, changetemp?: boolean): void
/**
 * Creates a clone of pixel at coordinates (x, y).
 * @param pixel - The pixel being cloned.
 * @param x - The x coordinate of the new pixel.
 * @param y - The y coordinate of the new pixel.
 * @throws {TypeError} If Coordinates are out of bounds
 * @example
 * ```js
 * let pixel = getPixel(12, 12); // Get a pixel at 12, 12
 * clonePixel(pixel, 16, 16); // Create a clone of the pixel at 16, 16
 * ```
 */
declare function clonePixel(pixel: Pixel, x: number, y: number): void
/**
 * Returns true if coordinates (x, y) are empty.
 * If oob is true or the pixel is out of bounds it will return true if ignoreBounds is true.
 * Otherwise it will return false.
 * @param x 
 * @param y 
 * @param ignoreBounds 
 * @param oob

 * @example
 * isEmpty(20, 20, false, false) // Returns true if there is no pixel there
 */
declare function isEmpty(x: number, y: number, ignoreBounds?: boolean, oob?: boolean): boolean
/**
 * Checks if coordinates are out of bounds
 * @param x - x coordinate
 * @param y - y coordinate
 */
declare function outOfBounds(x: number, y: number): boolean
/**
 * Logs a message to the game
 * @param text - text that should be logged
 */
declare function logMessage(text: string): void
/**
 * Attempts to move a pixel to the new coordinates
 * @param pixel - The pixel that will be moved
 * @param nx - New x coordinate of pixel 
 * @param ny - New y coordinate of pixel
 * @param leaveBehind - The element that will be left behind if any
 */
declare function tryMove(pixel: Pixel, nx: number, ny: number, leaveBehind?: string, force?: boolean): boolean
/**
 * Moves pixel1 to pixel2 and vice versa
 * @param pixel1 - The first pixel
 * @param pixel2 - The second pixel
 */
declare function swapPixels(pixel1: object, pixel2: object): void
/**
 * Releases count pixels of element around the origin (pixel)
 * @param pixel - Origin of the new pixels
 * @param element - Element that will be releases
 * @param count - How many pixels will be released (capped at 8)
 * @param replaceLiquid - Wheter or not it should replace liquids
 */
declare function releaseElement(pixel: Pixel, element: string, count?: number, replaceLiquid?: boolean): Pixel | void
/**
 * Moves a pixel to coordinates (x, y)
 * @param pixel - The pixel being moved
 * @param x - The new x coordinate
 * @param y - The new y coordinate
 * @throws {TypeError} If ( `x`, `y` )is out of bounds
 * @param leaveBehind If the pixel should leave a clone of itself behind
 */
declare function movePixel(pixel: Pixel, x: number, y: number, leaveBehind?: boolean): void
/**
 * Show a prompt with only text in it.
 *
 * @param text - The text in to show in the prompt.
 * @param handler - The callback to run after the ok button is pressed.
 * @param title - The title for the prompt.
 */
declare function promptText(text: string, handler: Function, title?: string): void
/**
 * Show a prompt with confirm/cancel buttons
 * 
 * @param text - The text to show in the prompt
 * @param handler - The callback to run. `value` is `true` when "confirm" is pressed, `false`
 * when "cancel" is pressed, and undefined if the close button is pressed.
 * @param title - The title for the prompt
 * @param danger - Whether to colour the "confirm" option red to show that the action is dangerous
 */
declare function promptConfirm(text: string, handler: (value: boolean | undefined) => void, title?: string, danger?: boolean): void
/**
 * Show a prompt asking for text in a textbox.
 * 
 * @param text - The text to show in the prompt
 * @param handler - The callback to run. The `value` parameter is is the text in the prompt. It's not
 * called at all if the window is closed directly.
 * @param title - The title for the prompt
 * @param defaultInput - The default value for the textbox
 */
declare function promptInput(text: string, handler: (value: string) => void, title?: string, defaultInput?: string): void
/**
 * Show a prompt to choose between a set of options.
 * 
 * @param text - The text to show in the prompt
 * @param handler - The callback to run. The `value` parameter is the choice selected. It's not called
 * at all if the window is closed directly.
 * @param title - The title for the prompt
 * @param defaultInput - The default value for the textbox
 */
declare function promptChoose(text: string, choices: string[], handler: (value: string) => void, title?: string): void
/**
 * Show a prompt to choose between each direction.
 * 
 * @param text - The text to show in the prompt
 * @param handler
 * The callback to run. The `value` parameter is the direction selected. It's not called
 * at all if the window is closed directly.
 * 
 * The values for the value parameter are:\
 * 0: left\
 * 1: down\
 * 2: right\
 * 3: up
 * @param title - The title for the prompt
 * @param defaultInput - The default value for the textbox
 */
declare function promptDir(text: string, handler: (value: 0|1|2|3) => void, title?: string): void
declare function runEveryTick(callback: () => void): void
declare function runAfterLoad(callback: () => void): void
declare function runAfterAutogen(callback: () => void): void
declare function runPerPixel(callback: () => void): void
declare function runAfterReset(callback: () => void): void
declare function renderEachPixel(callback: () => void): void
declare function renderPostPixel(callback: () => void): void
declare function renderPrePixel(callback: () => void): void
declare function dependOn(modName: string, callback: () => void, forceLoad?: boolean): void
declare function clearLog(): void
declare function doDefaults(pixel: Pixel): void
declare function doBurning(pixel: Pixel): void
declare function doHeat(pixel: Pixel): void
declare function doElectricity(pixel: Pixel, step: number): void
declare function doStaining(pixel: Pixel): void
declare function doAirDensity(pixel: Pixel): void
declare function pixelColorPick(pixel: Pixel, customColor?: null | string | string[]): string
declare function tryCreate(element: string | string[], x: number, y: number, replace?: boolean): void
declare function tryDelete(x: number, y: number): object | null
declare function modIsEnabled(modName: string): boolean
declare function tpsPrompt(): void
declare function explodeAt(x: number, y: number, radius: number, fire: string): void
declare function mostSimilarElement(s: any): string | null
declare function RGBToHex(rgb: [number, number, number]): string
declare function hexToRGB(hex: string): { r: number, g: number, b: number } | null
declare function RGBToHSL(rgb: [number, number, number]): [number, number, number]
declare function HSLtoRGB(hsl: [number, number, number]): [number, number, number]
declare function eListAdd(listName: string, itemList: string[] | string): void
declare function drawDefault(ctx: CanvasRenderingContext2D, pixel: Pixel): void
declare function shuffleArray(array: any[]): void
declare function pixelTempCheck(pixel: Pixel): void
declare function choose(array: any[]): any
declare function getNeighbors(pixel: Pixel): (Pixel | null)[]
declare function circleCoords(x: number, y: number, radius: number): { x: number, y: number }[]
declare function addElement(key: string, obj: Element): void
declare function addCanvasLayer(name: string): void
declare function drawPlus(ctx: CanvasRenderingContext2DSettings, color: string, x: number, y: number, scale?: number, opacity?: number): void
declare function drawSquare(ctx: CanvasRenderingContext2DSettings, color: string, x: number, y: number, scale?: number, opacity?: number): void
declare function focusGame(): void
declare function mean(arr: number[]): number
declare function onAddElement(callback: () => void): void
declare function outOfSight(x: number, y: number): boolean
declare function onBorder(x: number, y: number): boolean
declare function onBorderX(x: number): boolean
declare function onBorderY(y: number): boolean
declare function pixelTick(pixel: Pixel, custom?: unknown): void
declare function reactPixels(pixel1: Pixel, pixel2: Pixel): void
declare function rectCoords(x1: number, y1: number, x2: number, y2: number): object[]
declare function resetPrompt(confitmed?: boolean): void
declare function resetInterval(newtps?: number): void
declare function stainPixel(newPixel: Pixel, color: string | string[], intensity?: number): void
declare function setTPS(newtps: number): void
declare function selectElement(element: string): void
declare function showModManager(): void
declare function showSaves(): void
declare function toggleShift(): void
declare function tick(): void
declare function togglePause(): void
declare function validateMoves(callback: () => void): void
declare function averageRGB(rgblist: [number, number, number][]): string

interface ElementReaction {
    elem1?: string | null | (string | null)[]
    elem2?: string | null | (string | null)[]
    color1?: string
    color2?: string
    chance?: number
    temp1?: number
    temp2?: number
    attr1?: { [key: string]: any }
    attr2?: { [key: string]: any }
    tempMin?: number
    tempMax?: number
    oneway?: boolean
    charged?: boolean
    burning1?: boolean
    burning2?: boolean
    y?: [number, number]
    setting?: string
    charge1?: number
    charge2?: number
    stain1?: string
    stain2?: string
    func?: ((pixel1: Pixel, pixel2: Pixel) => void)
}

declare var behaviors: {
    POWDER_OLD: string[]
    POWDER: (pixel: Pixel) => void
    AGPOWDER: string[]
    LIQUID_OLD: string[]
    LIQUID: (pixel: Pixel) => void
    SUPERFLUID_OLD: string[]
    SUPERFLUID: (pixel: Pixel) => void
    LIGHTWEIGHT: string[]
    SLIDE: string[]
    AGLIQUID: string[]
    WALL: string[]
    UL_UR: string[]
    UL_UR_OPTIMIZED: (pixel: Pixel) => void
    GAS_OLD: string[]
    GAS: (pixel: Pixel) => void
    DGAS_OLD: string
    DGAS: (pixel: Pixel) => void
    SUPPORT: string[]
    SUPPORT_POWDER: string[]
    DELETE: string[]
    FILL: string[]
    CLONER: string[]
    CLONE_ON_CLICK: (pixel: Pixel, element: string) => void
    STAIN_ON_MIX: (pixel1: Pixel, pixel2: Pixel) => void
    STURDYPOWDER_OLD: string[]
    STURDYPOWDER: (pixel: Pixel) => void
    SELF_DELETE: string[]
    FOAM: string[]
    BUBBLE: string[]
    STICKY: string[]
    MOLTEN: (pixel: Pixel) => void
    MOLTEN_OLD: string[]
    RADPOWDER: string[]
    RADMOLTEN: string[]
    RADLIQUID: string[]
    BOUNCY: (pixel: Pixel) => void
    FEEDPIXEL: (pixel: Pixel) => void
    KILLPIXEL1: (pixel: Pixel) => void
    KILLPIXEL2: (pixel1: Pixel, pixel2: Pixel) => void
    FLY: (pixel: Pixel) => void
    CRAWLER2: (pixel: Pixel, onHit?: boolean, afterMove?: boolean) => void
    CRAWLER: (pixel: Pixel) => void
    ABSORB: (pixel: Pixel, limit?: number, rate?: number) => void
    RELEASE_MOISTURE: (pixel: Pixel) => void
    DO_TICK: (pixel: Pixel) => void
    SEEDRISE: (pixel: Pixel) => void

    [key: string]: any
}

type RenderPresets = (pixel: Pixel, ctx: CanvasRenderingContext2D) => void

declare var renderPresets: {
    HEATGLOW: RenderPresets
    WOODCHAR: RenderPresets
    PLANTCHAR: RenderPresets
    CHARCOALHEAT: RenderPresets
    HUESHIFT: RenderPresets
    MOLTEN: RenderPresets
    BORDER: RenderPresets
    LED: RenderPresets

    [key: string]: RenderPresets
}

declare var enabledMods: string[]

declare var defaultCooldown: number

declare var eLists: {
    ANIMAL: string[]
    CLEANANIMAL: string[]
    SEEDS: string[]
    SOIL: string[]
    CRAWLTHRU: string[]
    HIVESPACE: string[]

    [key: string]: string[]
}

declare var pixelTicks: number

declare var isMobile: boolean

declare var currentPixels: Pixel[]

interface Views {
    [key: string]: any
}

declare var viewInfo: Record<string, Views>

declare var elements: Record<string, Element>

declare var pixelMap: (Pixel | null)[][]

declare var squareCoords: [number, number][]
declare var adjacentCoords: [number, number][]
declare var squareCoordsShuffle: [number, number][]
declare var adjacentCoordsShuffle: [number, number][]
declare var interactCoords: [number, number][]
declare var biCoords: [number, number][]

declare var settings: {
    [key: string]: any
}

declare var keybinds: {
    [key: string]: () => any
}

declare var shiftDown: number

declare var tps: number

declare var view: number

declare var paused: boolean

declare var btemp: {
    [key: string]: any
}

declare var textures: {
    GLASS: string[]
    BRICK: string[]

    [key: string]: string[]
}

type MainCategories =
    | "tools"
    | "land"
    | "liquids"
    | "life"
    | "powders"
    | "solids"
    | "energy"
    | "weapons"
    | "gases"
    | "food"
    | "machines"
    | "special"
    | "states";

type Category = MainCategories | (string & Record<never, never>);

declare var height: number
declare var width: number

// Some of these might be wrong
interface Element {
    id?: number
    /** The name of the element */
    name?: string
    /** Any aliases for an element (e.g. alcohol is aliased as ethanol ingame) */
    alias?: string | string[]
    /** The category an element belongs to */
    category?: Category
    /** A description for the element */
    desc?: string
    extraInfo?: string
    related?: string | string[]
    hidden?: boolean
    darkText?: boolean
    canPlace?: boolean
    nocheer?: boolean
    forceAutoGen?: boolean
    /** 
     * The colour or set of colours for an element. One is randomly selected if there's
     * an array.
     */
    color?: string | string[]
    colorObject?: { r: number; g: number; b: number }[]
    colorOn?: string | string[]
    customColor?: boolean
    singleColor?: boolean
    forceSaveColor?: boolean
    colorPattern?: string[]
    colorKey?: { [key: string]: string }
    alpha?: number
    glow?: boolean
    firedColors?: { [element: string]: string[] }
    behavior?: Behavior
    behaviorOn?: Behavior
    /** The function to run every tick for a pixel. The pixel is provided as an argument */
    tick?: ((pixel: Pixel) => void)
    onClicked?: (pixel: Pixel) => void
    tick1?: (pixel: Pixel) => void
    tick2?: (pixel: Pixel) => void
    tool?: (pixel: Pixel) => void
    onMouseUp?: () => void
    onMouseDown?: () => void
    /** Run when an element is selected. */
    onSelect?: () => void
    onUnselect?: () => void
    onPlace?: (pixel: Pixel) => void
    onDelete?: (pixel: Pixel) => void
    onChange?: (pixel: Pixel) => void
    /** Run when a pixel is mixed. The pixel is provided as an argument. */
    onMix?: (pixel: Pixel) => void
    /** Run when a pixel is broken. The pixel is provided as an argument. */
    onBreak?: (pixel: Pixel) => void
    perTick?: () => void
    hoverStat?: (pixel: Pixel) => void
    renderer?: (pixel: Pixel, ctx: CanvasRenderingContext2D) => void
    reactions?: { [key: string]: ElementReaction }
    temp?: number
    tempLow?: number
    stateLow?: string | (string | null)[]
    stateLowName?: string
    stateLowColor?: string
    stateLowColorMultiplier?: number[] | number
    /** The temperature at which the element changes to the element provided by `stateHigh` */
    tempHigh?: number
    /** The element to change to at `tempHigh` */
    stateHigh?: string | (string | null)[]
    stateHighName?: string
    stateHighColor?: string
    stateHighColorMultiplier?: number[] | number
    extraTempLow?: { [temperature: number]: string | string[] }
    extraTempHigh?: { [temperature: number]: string | string[] }
    state?: "solid" | "liquid" | "gas"
    density?: number
    insulate?: boolean
    viscosity?: number
    conduct?: number
    ignoreConduct?: string[]
    superconductAt?: number
    stain?: number
    stainSelf?: boolean
    charge?: number
    movable?: boolean
    hardness?: number
    foodNeed?: number
    properties?: { [key: string]: any }
    maxSize?: number
    baby?: string
    egg?: string
    eggColor?: string | string[]
    seed?: string | boolean
    noMix?: boolean
    ignoreAir?: boolean
    excludeRandom?: boolean
    cooldown?: number
    isFood?: boolean
    isGas?: boolean
    ignore?: (string | string[])[]
    canContain?: boolean
    burn?: number
    burning?: boolean
    burnTime?: number
    burnInto?: string | string[]
    extinguish?: boolean
    fireColor?: string | string[]
    fireElement?: string
    rotatable?: boolean
    flippableX?: boolean
    flippableY?: boolean
    /** The element or list of elements to break into. */
    breakInto?: string | string[]
    breakIntoColor?: string | string[]

    [key: string]: any;
}