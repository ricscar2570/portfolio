
package model;

import java.awt.*;

public class Enemy {
    private int x, y;
    private int speed;

    public Enemy(int x, int y, int speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
    }

    public void move() {
        x += speed;
        if (x < 0 || x > 750) {
            speed = -speed;
        }
    }

    public void draw(Graphics g) {
        g.setColor(Color.RED);
        g.fillRect(x, y, 50, 50);
    }

    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }
}
