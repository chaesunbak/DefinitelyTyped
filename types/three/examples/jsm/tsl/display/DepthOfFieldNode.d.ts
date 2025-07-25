import { ShaderNodeObject } from "three/tsl";
import { Node, TempNode, TextureNode, UniformNode } from "three/webgpu";

declare class DepthOfFieldNode extends TempNode {
    textureNode: TextureNode;
    viewZNode: Node;

    focus: UniformNode<number>;
    aperture: UniformNode<number>;
    maxblur: UniformNode<number>;

    constructor(textureNode: TextureNode, viewZNode: Node, focusNode: Node, apertureNode: Node, maxblurNode: Node);
}

export default DepthOfFieldNode;

export const dof: (
    node: Node,
    viewZNode: Node,
    focus?: Node,
    aperture?: Node,
    maxblur?: Node,
) => ShaderNodeObject<DepthOfFieldNode>;
