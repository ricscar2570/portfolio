
package model;

import java.awt.*;

public class Bubble {
    private int x, y;
    private int speed;

    public Bubble(int x, int y) {
        this.x = x;
        this.y = y;
        this.speed = 5;
    }

    public void update() {
        y -= speed;
    }

    public boolean isOnScreen() {
        return y > 0;
    }

    public void draw(Graphics g) {
        g.setColor(Color.CYAN);
        g.fillOval(x, y, 20, 20);
    }
}
