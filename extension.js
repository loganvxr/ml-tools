(function(Scratch) {
    'use strict';

    let inputNodes  = 0;
    let hiddenNodes = 0;
    let outputNodes = 0;

    let hiddenBias = [];
    let outputBias = [];

    let hasNNInit = false;

    class Extension {
        getInfo() {
            return {
                id: "mltools",
                name: "ML Tools",
                color1: "#4A90D9",
                color2: "#4A90D9",
                color3: "#4381c5",
                blocks: [
                    // tanh
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
                    },
                    // sigmoid
                    {
                        opcode: 'sigmoid',
                        text: 'sigmoid [X]',
                        blockType: Scratch.BlockType.REPORTER,
                        arguments: {
                            X: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            }
                        }
                    },
                    // initNN
                    {
                        opcode: 'initNN',
                        text: 'create network [I] input layers [H] hidden layers [O] output layers',
                        blockType: Scratch.BlockType.COMMAND,
                        arguments: {
                            I: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            H: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            O: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                        }
                    },
                    // hasNNInit 
                    {
                        opcode: 'nnInit',
                        text: 'NN initalized',
                        blockType: Scratch.BlockType.BOOLEAN
                    },
                ]
            }
        }

        tanh({ X }) {
            return Math.tanh(X);
        }

        sigmoid({ X }) {
            return 1 / (1 + Math.exp(-X));
        }

        initNN({ I, H, O }) {
            inputNodes  = I;
            hiddenNodes = H;
            outputNodes = O

            // initalize biases with randomized weights
            for (let i = 0; i != hiddenNodes; i++) {
                hiddenBias.push(Math.random().toFixed(2));
            }
            for (let i = 0; i != outputNodes; i++) {
                outputBias.push(Math.random().toFixed(2));
            }

            hasNNInit = true;
        }

        nnInit() {
            return hasNNInit;
        }

    }
    Scratch.extensions.register(new Extension());
}(Scratch))