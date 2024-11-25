
package view;

import javax.swing.*;

public class GameWindow extends JFrame {
    public GameWindow() {
        setTitle("JBubbleBobble");
        setSize(800, 600);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        add(new GamePanel());
    }
}
