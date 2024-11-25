
package controller;

import model.Bubble;
import model.Player;

import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.util.List;

public class InputHandler implements KeyListener {
    private Player player;
    private List<Bubble> bubbles;

    public InputHandler(Player player, List<Bubble> bubbles) {
        this.player = player;
        this.bubbles = bubbles;
    }

    @Override
    public void keyPressed(KeyEvent e) {
        switch (e.getKeyCode()) {
            case KeyEvent.VK_LEFT:
                player.moveLeft();
                break;
            case KeyEvent.VK_RIGHT:
                player.moveRight();
                break;
            case KeyEvent.VK_SPACE:
                bubbles.add(new Bubble(player.getX() + 15, player.getY()));
                break;
        }
    }

    @Override
    public void keyReleased(KeyEvent e) {}

    @Override
    public void keyTyped(KeyEvent e) {}
}
