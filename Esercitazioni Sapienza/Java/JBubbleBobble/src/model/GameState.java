
package model;

import controller.InputHandler;

import java.awt.*;
import java.util.ArrayList;
import java.util.List;

public class GameState {
    private Player player;
    private List<Enemy> enemies;
    private List<Bubble> bubbles;
    private InputHandler inputHandler;

    public GameState() {
        player = new Player("Player1");
        enemies = new ArrayList<>();
        bubbles = new ArrayList<>();
        inputHandler = new InputHandler(player, bubbles);

        // Inizializza i nemici
        enemies.add(new Enemy(200, 200, 2));
        enemies.add(new Enemy(400, 300, -2));
    }

    public InputHandler getInputHandler() {
        return inputHandler;
    }

    public void update() {
        player.update();

        // Aggiorna le bolle
        for (Bubble bubble : bubbles) {
            bubble.update();
        }

        // Aggiorna i nemici
        for (Enemy enemy : enemies) {
            enemy.move();
        }

        // Rimuovi bolle fuori dallo schermo
        bubbles.removeIf(bubble -> !bubble.isOnScreen());
    }

    public void draw(Graphics g) {
        player.draw(g);
        for (Enemy enemy : enemies) {
            enemy.draw(g);
        }
        for (Bubble bubble : bubbles) {
            bubble.draw(g);
        }
    }
}
