// https://blotter.js.org

// Define text style
const text = new Blotter.Text('very cool', {
family: "'Georgia', serif",
size: 100,
paddingLeft: 0,
paddingRight: 0
});

// Use a material
// https://blotter.js.org/#/materials
// Channel Split Material
let material = new Blotter.ChannelSplitMaterial();

// Set material opts
material.uniforms.uOffset.value = 0.08;
material.uniforms.uRotation.value = 45;
material.uniforms.uApplyBlur.value = 1;
material.uniforms.uAnimateNoise.value = 1;

// Flies Material
// let material = new Blotter.FliesMaterial();

// material.uniforms.uPointCellWidth.value = 0.013;
// material.uniforms.uPointRadius.value = 1;
// // material.uniforms.uDodge.value = 1;
// material.uniforms.uDodgePosition.value = [0.2, 0.4];
// material.uniforms.uSpeed.value = 1;


let blotter = new Blotter(material, {
texts: text
});

// Apply to element
let scope = blotter.forText(text);
let elem = document.getElementById('blotz');
scope.appendTo(elem);
