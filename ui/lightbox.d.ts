declare const Clutter: any;
declare const GObject: any;
declare const Shell: any;
declare const St: any;
declare const Params: any;
declare var DEFAULT_FADE_FACTOR: number;
declare var VIGNETTE_BRIGHTNESS: number;
declare var VIGNETTE_SHARPNESS: number;
declare const VIGNETTE_DECLARATIONS: "                                              uniform float brightness;                                                  \nuniform float vignette_sharpness;                                          \nfloat rand(vec2 p) {                                                       \n  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453123);        \n}                                                                          \n";
declare const VIGNETTE_CODE: "                                                      cogl_color_out.a = cogl_color_in.a;                                        \ncogl_color_out.rgb = vec3(0.0, 0.0, 0.0);                                  \nvec2 position = cogl_tex_coord_in[0].xy - 0.5;                             \nfloat t = clamp(length(1.41421 * position), 0.0, 1.0);                     \nfloat pixel_brightness = mix(1.0, 1.0 - vignette_sharpness, t);            \ncogl_color_out.a *= 1.0 - pixel_brightness * brightness;                   \ncogl_color_out.a += (rand(position) - 0.5) / 100.0;                        \n";
declare var RadialShaderEffect: any;
/**
 * Lightbox:
 * @container: parent Clutter.Container
 * @params: (optional) additional parameters:
 *           - inhibitEvents: whether to inhibit events for @container
 *           - width: shade actor width
 *           - height: shade actor height
 *           - fadeFactor: fading opacity factor
 *           - radialEffect: whether to enable the GLSL radial effect
 *
 * Lightbox creates a dark translucent "shade" actor to hide the
 * contents of @container, and allows you to specify particular actors
 * in @container to highlight by bringing them above the shade. It
 * tracks added and removed actors in @container while the lightboxing
 * is active, and ensures that all actors are returned to their
 * original stacking order when the lightboxing is removed. (However,
 * if actors are restacked by outside code while the lightboxing is
 * active, the lightbox may later revert them back to their original
 * order.)
 *
 * By default, the shade window will have the height and width of
 * @container and will track any changes in its size. You can override
 * this by passing an explicit width and height in @params.
 */
declare var Lightbox: any;
//# sourceMappingURL=lightbox.d.ts.map