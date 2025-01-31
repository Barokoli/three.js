import { Fn } from '../shadernode/ShaderNode.js';
import { viewportUV } from '../display/ViewportNode.js';
import { viewportDepthTexture } from '../display/ViewportDepthTextureNode.js';
import { linearDepth } from '../display/ViewportDepthNode.js';

export const viewportSafeUV = Fn( ( [ uv = null ] ) => {

	const depth = linearDepth();
	const depthDiff = linearDepth( viewportDepthTexture( uv ) ).sub( depth );
	const finalUV = depthDiff.lessThan( 0 ).select( viewportUV, uv );

	return finalUV;

} );
