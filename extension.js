(function(Scratch) {
    'use strict';

    class Extension {
        getInfo() {
            return {
                id: "ml-tools",
                name: "ML Tools",
                color1: "#4A90D9",
                color2: "#4A90D9",
                color3: "#4381c5",
                blocks: [
                    [
                        {
                            opcode: 'tanh',
                            text: 'tanh [X]',
                            blockType: Scratch.BlockType.REPORTER,
                            arguments: {
                                X: {
                                    type: Scratch.ArgumentType.NUMBER,
                                    defaultValue: 0
                                }
                            }
                        }
                    ]   
                ]
            }
        }

        tanh({ X }) {
            return Math.tanh(X);
        }
    }
    Scratch.extensions.register(new Extension());
}(Scratch))