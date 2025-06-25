import numpy as np
import matplotlib.pyplot as plt
from sympy import primerange
from fractions import Fraction

def plot_prime_sum_with_arcs(N, num_alpha_points=1000, q_max=5, arc_width=0.01):
    primes = np.array(list(primerange(1, N + 1)))
    alpha_values = np.linspace(0, 1, num_alpha_points)
    magnitudes = []

    for alpha in alpha_values:
        S_alpha = np.sum(np.exp(2j * np.pi * alpha * primes))
        magnitudes.append(np.abs(S_alpha))

    # Plot setup
    plt.figure(figsize=(12, 6))
    plt.plot(alpha_values, magnitudes, color='black', linewidth=1, label="|S(α, N)|")

    # === Highlight Major Arcs ===
    major_arc_centers = []
    for q in range(1, q_max + 1):
        for a in range(q):
            if np.gcd(a, q) == 1:
                center = a / q
                major_arc_centers.append(center)
                # Highlight region
                left = center - arc_width / 2
                right = center + arc_width / 2
                plt.axvspan(left, right, color='red', alpha=0.2)

    # Highlight rest of region as minor arcs (visually implied by contrast)
    plt.title(f"Hardy–Littlewood Prime Sum |S(α, N)| with Major Arcs (q ≤ {q_max})")
    plt.xlabel(r"$\alpha$")
    plt.ylabel(r"$|S(\alpha, N)|$")
    plt.grid(True)
    plt.legend()
    plt.tight_layout()
    plt.show()

# === Customize your parameters here ===
N = 99
plot_prime_sum_with_arcs(N=N, q_max=5, arc_width=0.02)
