
package model;

import java.awt.*;

public class Player {
    private int x, y;
    private int speed;

    public Player(String nickname) {
        this.x = 100;
        this.y = 500;
        this.speed = 5;
    }

    public void moveLeft() {
        x -= speed;
    }

    public void moveRight() {
        x += speed;
    }

    public void jump() {
        y -= 50;
    }

    public void fall() {
        y += 2; // Gravità
    }

    public void update() {
        fall();
    }

    public void draw(Graphics g) {
        g.setColor(Color.BLUE);
        g.fillRect(x, y, 50, 50);
    }

    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }
}
