# Liquid Glass Design for Apple Widgets

> Build widgets that feel native on iOS 26, iPadOS, macOS, and visionOS by adopting Apple's Liquid Glass design system.

Liquid Glass is Apple's new adaptive material that gives interface elements the appearance of translucent glass while dynamically responding to the surrounding content. Widgets automatically participate in this system when configured correctly, but they also require changes to rendering, image handling, and backgrounds to look correct in every environment.

---

# Widget Rendering Modes

Widgets can render in two different modes depending on the user's Home Screen appearance.

## Full Color

The default mode.

Characteristics:

- Displays your original colors
- Preserves gradients
- Shows images exactly as designed
- Uses your widget background

Use this mode whenever your design depends on color, branding, or photography.

```swift
@Environment(\.widgetRenderingMode)
private var renderingMode

var body: some View {
    if renderingMode == .fullColor {
        FullColorWidget()
    }
}
```

---

## Accented

Used when the user enables a **Tinted** or **Clear** Home Screen appearance.

In accented mode:

- Accent content becomes white
- Primary content becomes tinted appropriately
- Images are converted to monochrome
- Widget backgrounds are replaced by the system's Liquid Glass material

```swift
@Environment(\.widgetRenderingMode)
private var renderingMode

var body: some View {
    if renderingMode == .accented {
        SimplifiedWidget()
    }
}
```

---

# Detect Rendering Mode

Always check the current rendering mode before displaying complex UI.

```swift
struct MyWidgetView: View {

    @Environment(\.widgetRenderingMode)
    private var renderingMode

    var body: some View {

        switch renderingMode {

        case .fullColor:
            FullColorLayout()

        case .accented:
            AccentedLayout()

        @unknown default:
            FullColorLayout()
        }
    }
}
```

This allows you to simplify layouts when colors are unavailable.

---

# Create Accent Groups

Widgets should separate content into **primary** and **accent** groups.

Use:

```swift
.widgetAccentable()
```

Example:

```swift
VStack(alignment: .leading) {

    Text("Weather")
        .font(.headline)
        .widgetAccentable()

    Text("27°")
        .font(.largeTitle)
        .widgetAccentable()

    Text("Mostly Sunny")
}
```

Here:

- Title belongs to accent group
- Temperature belongs to accent group
- Description remains primary

This creates visual hierarchy automatically in accented mode.

---

# Rendering Images

Images require special handling because the system cannot preserve full color during accented rendering.

Use:

```swift
.widgetAccentedRenderingMode(...)
```

Example:

```swift
Image("weather")
    .widgetAccentedRenderingMode(.monochrome)
```

Available rendering modes include:

| Mode | Purpose |
|-------|----------|
| `.monochrome` | Converts image into a single tinted color |
| `.accented` | Uses accent rendering |
| `.desaturated` | Removes saturation while preserving detail |
| `.fullColor` | Always displays original colors |

Choose the mode that best matches the role of the image.

---

# Widget Backgrounds

Widgets should always use container backgrounds instead of manually drawing backgrounds.

```swift
.containerBackground(for: .widget) {

    Color.blue.opacity(0.15)

}
```

During accented rendering Apple automatically removes this background and replaces it with Liquid Glass.

Do **not** manually recreate glass effects behind your widget.

---

# Prevent Background Removal

Normally Apple removes widget backgrounds in Lock Screen and tinted modes.

If your widget absolutely depends on its own background:

```swift
.containerBackgroundRemovable(false)
```

Example:

```swift
StaticConfiguration(...) {

    WidgetView()

}
.containerBackgroundRemovable(false)
```

> **Warning**
>
> Widgets with non-removable backgrounds cannot appear in certain system contexts such as StandBy or the iPad Lock Screen.

Use this only when absolutely necessary.

---

# Applying Liquid Glass to Custom Elements

SwiftUI provides a dedicated modifier:

```swift
.glassEffect()
```

Example:

```swift
Text("Now Playing")
    .padding()
    .glassEffect()
```

Default appearance:

- Capsule shape
- Adaptive blur
- Dynamic reflections
- Automatic lighting

---

## Custom Shapes

```swift
Image(systemName: "star.fill")
    .frame(width: 60, height: 60)
    .glassEffect(
        .regular,
        in: .rect(cornerRadius: 16)
    )
```

You can apply glass to:

- rectangles
- circles
- rounded rectangles
- custom shapes

---

# Glass Buttons

Buttons can automatically adopt the new appearance.

```swift
Button("Play") {

}
.buttonStyle(.glass)
```

This produces Apple's native floating glass button.

---

# Combining Multiple Glass Elements

Multiple glass elements should be wrapped inside a `GlassEffectContainer`.

```swift
GlassEffectContainer {

    HStack {

        Image(systemName: "cloud")
            .glassEffect()

        Image(systemName: "sun.max")
            .glassEffect()
    }
}
```

This allows nearby glass surfaces to interact naturally.

---

# Glass Effect Union

Several elements can merge into a single glass surface.

```swift
GlassEffectContainer {

    HStack {

        Image(systemName: "cloud")
            .glassEffect()
            .glassEffectUnion(
                id: "weather",
                namespace: namespace
            )

        Image(systemName: "sun.max")
            .glassEffect()
            .glassEffectUnion(
                id: "weather",
                namespace: namespace
            )
    }
}
```

Elements sharing the same union ID visually blend into one continuous piece of glass.

---

# visionOS Support

Widgets on visionOS gain additional customization.

## Widget Texture

Glass texture (default):

```swift
.widgetTexture(.glass)
```

Paper texture:

```swift
.widgetTexture(.paper)
```

---

## Mounting Style

Supported mounting styles:

```swift
.supportedMountingStyles([
    .recessed,
    .elevated
])
```

Available styles:

| Style | Description |
|--------|-------------|
| `.elevated` | Floating above the surface |
| `.recessed` | Embedded into a wall or panel |

---

## Level of Detail

visionOS widgets should react to viewing distance.

```swift
@Environment(\.levelOfDetail)
private var levelOfDetail
```

Example:

```swift
var titleFont: Font {

    levelOfDetail == .simplified
        ? .largeTitle
        : .title

}
```

When the widget is viewed from farther away, simplify typography and reduce visual complexity.

---

# Best Practices

### Prefer system materials

Avoid creating your own blur effects. Use Apple's built-in Liquid Glass APIs.

### Keep accent groups meaningful

Accent only important content such as:

- Titles
- Key values
- Icons
- Status indicators

Avoid accenting everything.

### Simplify accented layouts

Complex gradients and colorful illustrations lose meaning when rendered monochromatically.

Provide alternate layouts where appropriate.

### Test transparency

Always verify widgets against:

- Light wallpapers
- Dark wallpapers
- Colorful wallpapers
- Clear Home Screen mode
- Tinted Home Screen mode

### Use container backgrounds

Never build widget backgrounds manually.

Apple automatically replaces them with platform-appropriate Liquid Glass.

---

# Testing Checklist

Before shipping, verify your widget in:

- Light Mode
- Dark Mode
- Full Color rendering
- Accented rendering
- Home Screen
- Lock Screen
- StandBy
- Different widget sizes
- Multiple accent colors
- visionOS
- Different viewing distances (visionOS)

---

# References

- https://developer.apple.com/documentation/WidgetKit/optimizing-your-widget-for-accented-rendering-mode-and-liquid-glass
- https://developer.apple.com/documentation/SwiftUI/Applying-Liquid-Glass-to-custom-views
- https://developer.apple.com/documentation/SwiftUI/Landmarks-Building-an-app-with-Liquid-Glass
- https://developer.apple.com/documentation/WidgetKit/Displaying-the-right-widget-background
- https://developer.apple.com/documentation/WidgetKit/Updating-your-widgets-for-visionOS