import turtle
import math
import time

# Setup screen
screen = turtle.Screen()
screen.bgcolor("black")
screen.title("Clock Vector Visualizer")

# Create the drawer turtle
drawer = turtle.Turtle()
drawer.hideturtle()
drawer.speed(0)
drawer.pensize(2)

# Parameters
N = 60           # Number of vectors (like primes)
alpha = 1/12     # Change this to test different alpha values (e.g. 1/12 vs 1/7 vs irrational)
radius = 200     # Circle size

# Colors
def get_color(i):
    hue = i / N
    return (1.0 - hue, hue, 0.7)

# Convert polar to cartesian
def polar_to_cartesian(r, theta):
    return r * math.cos(theta), r * math.sin(theta)

# Draw unit circle
def draw_circle():
    drawer.penup()
    drawer.color("white")
    drawer.goto(0, -radius)
    drawer.pendown()
    drawer.circle(radius)
    drawer.penup()

# Draw a vector for each term e^{2pi*i*m*alpha}
def draw_vectors(alpha):
    drawer.clear()
    draw_circle()
    
    drawer.penup()
    drawer.goto(0, 0)
    drawer.pendown()

    sum_x = 0
    sum_y = 0

    for m in range(1, N + 1):
        angle = 2 * math.pi * m * alpha
        x, y = polar_to_cartesian(radius / N, angle)
        
        sum_x += x
        sum_y += y

        drawer.color("cyan")
        drawer.penup()
        drawer.goto(sum_x - x, sum_y - y)
        drawer.pendown()
        drawer.goto(sum_x, sum_y)

    # Draw resultant vector
    drawer.color("red")
    drawer.penup()
    drawer.goto(0, 0)
    drawer.pendown()
    drawer.goto(sum_x, sum_y)

# Main loop
def run_visualizer():
    while True:
        for a in range(1, 21):
            alpha = a / 12     # Rational alpha → periodic (constructive)
            draw_vectors(alpha)
            screen.title(f"α = {alpha:.2f} (rational)")
            time.sleep(1)

        alpha = math.sqrt(2) / 10   # Irrational alpha → destructive
        draw_vectors(alpha)
        screen.title(f"α = {alpha:.4f} (irrational)")
        time.sleep(2)

run_visualizer()
