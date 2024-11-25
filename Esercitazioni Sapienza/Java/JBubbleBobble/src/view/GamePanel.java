
package view;

import model.GameState;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class GamePanel extends JPanel {
    private GameState gameState;
    private Timer timer;

    public GamePanel() {
        gameState = new GameState();
        setFocusable(true);
        addKeyListener(gameState.getInputHandler());

        // Timer per aggiornare il gioco
        timer = new Timer(16, new ActionListener() { // ~60 FPS
            @Override
            public void actionPerformed(ActionEvent e) {
                gameState.update();
                repaint();
            }
        });
        timer.start();
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        gameState.draw(g);
    }
}
