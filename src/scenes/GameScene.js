import 'phaser';

export default class GameScene extends Phaser.Scene {
    constructor() {
        super('Game');
    }
    create() {
        this.add.text(100, 200, 'Hello, World!', {});
    }
}