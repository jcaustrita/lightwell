import * as components from './**/index.js'

for(const [name, component] of Object.entries(components)) {
	exports[name] = component
}
