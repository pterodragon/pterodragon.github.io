# Control Theory

## Math review
see `math_review.md`

## 2 System modeling
#### State space models
$$
\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}t} = f(\mathbf{x}, \mathbf{u}), \qquad \mathbf{y}=h(\mathbf{x}, \mathbf{u})
$$
$\mathbf{x}$ is a vector of state variables. $\mathbf{u}$ is a vector of control signals. $\mathbf{y}$ is a vector of measurements.

#### Linear state space system
$$
\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}t} = \mathbf{Ax}+\mathbf{Bu}, \qquad \mathbf{y}=\mathbf{Cx} + \mathbf{Du}
$$
homogeneous case when $\mathbf{u} = 0$

$\mathbf{A}$ is the dynamic matrix. $\mathbf{B}$ is the control matrix. $\mathbf{C}$ is the sensor matrix. $\mathbf{D}$ is the direct term.

## 4 Dynamic behaviour
### Equilibrium points and limit cycles
A state $x_e$ is an equilibrium point for a dynamic system
$$
\frac{\mathrm{d}x}{\mathrm{d}t} = F(x)
$$
if $F(x_e) = 0$

A linear system always has an equilibrium point at the origin.

### Stability
Let $x(t; a)$ be a solution to a differential equation with initial conditon a. A solution is *stable* if other solutions that start near $a$ stay close to $x(t; a)$. Formally, the solution $x(t; a)$ is stable if
$$
\forall \epsilon > 0, \exists \delta > 0, \forall t > 0, \qquad \|b - a \| < \delta \Rightarrow \|x(t; b) - x(t; a)\| < \epsilon
$$
$\delta$ may depend on $\epsilon$

This is also called *stability in the sense of Lyapunov*. If furthermore the trajectories don't converge, the solution is *neutrally stable*

A solution is *asymptotically stable* if it's stable in the sense of Lyapunov and $x(t; b) \rightarrow x(t; a)$ as $t \rightarrow \infty$ for $b$ sufficiently close to $a$

### Stability of linear systems
The system
$$
\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}t} = \mathbf{Ax}
$$
is asymptotically stable iff all $\mathfrak{Re}(\lambda_i) < 0$. And unstable if some $\mathfrak{Re}(\lambda_i) > 0$

Proof: using Jordan form of $A$

## 5 Linear Systems
### Linearity
The complete solution of a linear state space system is the sum of the homogeneous solution when $u(t)=0$ and the particular solution with zero initial condition $x(0)=0$
### Matrix exponential
$$
e^\mathbf{X} = \mathbf{I} + \mathbf{X} + \frac{1}{2}\mathbf{X}^2 + \frac{1}{3!}\mathbf{X}^3 + \dots = \sum_{k=0}^{\infty}\frac{1}{k!}\mathbf{X}^k
$$

#### Initial condition response
The solution of 
$$
\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}t} = \mathbf{Ax}
$$
is
$$
\mathbf{x}(t) = e^{\mathbf{A}t}\mathbf{x}(0)
$$

## Input/Output Response
### The convolution equation
The solution to
$$
\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}t} = \mathbf{Ax}+\mathbf{Bu}, \qquad \mathbf{y}=\mathbf{Cx} + \mathbf{Du}
$$
is
$$
\mathbf{x}(t) = e^{\mathbf{A}t}\mathbf{x}(0) + \int_0^t e^{\mathbf{A}(t-\tau)}\mathbf{Bu}(\tau)\mathrm{d}\tau
$$
Input/Output relation (convolution equation) is
$$
\mathbf{y}(t) = \mathbf{Ce}^{\mathbf{A}t}\mathbf{x}(0) + \int_0^t \mathbf{C}e^{\mathbf{A}(t-\tau)}\mathbf{Bu}(\tau)\mathrm{d}\tau + \mathbf{D}\mathbf{u}(t)
$$

Another derivation is by defining the *impulse response* of a system $h(t)$ to be
$$
  h(t) = \int_0^t \mathbf{C}e^{\mathbf{A}(t-\tau)}\mathbf{B}\delta(\tau)\mathrm{d}\tau = \mathbf{C}e^{\mathbf{A}t}\mathbf{B}
$$
The convolution equation is then
$$
\mathbf{y}(t) = \mathbf{Ce}^{\mathbf{A}t}\mathbf{x}(0) + \int_0^t h(t-\tau)\mathbf{u}(\tau)\mathrm{d}\tau + \mathbf{D}\mathbf{u}(t)
$$
$$
\mathbf{y}(t) = \mathbf{Ce}^{\mathbf{A}t}\mathbf{x}(0) + h(t) * \mathbf{u}(t)+ \mathbf{D}\mathbf{u}(t)
$$
### Steady state response
The convolution equation consists of two components: the *transient response* and the *steady state response*. 

By setting $\mathbf{u}(t)$ as the unit step
$$
\mathbf{y}(t) = \mathbf{CA}^{-1}e^{\mathbf{A}t}\mathbf{B}+\mathbf{D}-\mathbf{CA}^{-1}\mathbf{B}, \qquad t>0
$$
First term above is the transient response, and 2nd and 3rd term combined is the steady state response.

Transient response decays to zero as $t \rightarrow \infty$

By setting $\mathbf{u}(t)$ as $\cos \omega t = \frac{1}{2}(e^{i\omega t}+e^{-i\omega t})$, by using linearity, it sufficies to just compute the response to $\mathbf{u}(t)=e^{st}$ and average the responses $s=i\omega t$ and $s=-i \omega t$

Assuming none of the eigenvalues of $\mathbf{A}$ are equal to $s=\plusmn i\omega$, then $s\mathbf{I}-\mathbf{A}$ is invertible and
$$
\mathbf{y}(t) = \mathbf{C}e^{\mathbf{A}t}\Big(\mathbf{x}(0)-(s\mathbf{I}-\mathbf{A})^{-1}\mathbf{B}\Big)+\Big(\mathbf{C}(s\mathbf{I}-\mathbf{A})^{-1}\mathbf{B}+\mathbf{D}\Big)e^{st}
$$
Again first term is the transient response and second term is steady state response

### Sampling
Consider the general linear system, and assume the control signal is constant over a sampling period of constant length $h$
$$
\mathbf{x}(t) = e^{\mathbf{A}h}\mathbf{x}(t) + \int_t^{t+h} e^{\mathbf{A}(t+h-\tau)}\mathbf{Bu}(\tau)\mathrm{d}\tau = \Phi \mathbf{x}(t) + \Gamma \mathbf{u}(t)
$$
The behavior of the system at the sampling times $t=kh$ is described by the difference equation
$$
\mathbf{x}[k+1]=\Phi \mathbf{x}[k]+\Gamma \mathbf{u}[k], \qquad \mathbf{y}[k] = \mathbf{C} \mathbf{x}[k] + \mathbf{D} \mathbf{u}[k]
$$
This transformation is called *sampling*.

Relationship:
$$
\Phi = e^{\mathbf{A}h}, \qquad \Gamma = \Big(\int_0^h e^{\mathbf{A}s}\mathrm{d}s\Big)\mathbf{B}, \qquad \mathbf{A} = \frac{1}{h} \log \Phi, \qquad \mathbf{B} = \Big(\int_0^h e^{\mathbf{A}t}\mathrm{d}t\Big)^{-1}\Gamma
$$

## 6 State feedback
### Reachability
Focusing on the state evolution
$$
\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}t} = \mathbf{Ax}+\mathbf{B}u, \qquad u\in\mathbb{R}
$$

Reachable set is $\mathcal{R}(\mathbf{x}_0, \leq T)$ the set of all points $\mathbf{x}_f$ s.t. there exists an input $u(t), 0\leq t \leq T$ that steers $\mathbf{x}(0) = \mathbf{x}_0$ to $\mathbf{x}(t) = \mathbf{x}_f$

A linear system is *reachable* if $\forall \mathbf{x}_0, \mathbf{x}_f \in \mathbb{R^n}$, $\exists T>0, u:[0,T] \rightarrow \mathbb{R}$ s.t. the solution satisfies $\mathbf{x}(0)=\mathbf{x}_0$ and $\mathbf{x}(T)=\mathbf{x}_f$

## 7 Output feedback
### Observability
A system is *observable* if $\forall T>0$ it's possible to determine the state of the system $x(t)$ through measurements of $y(t)$ and $u(t)$ on the interval $[0, T]$.

Interpretation: There's no hidden dynamics and we can understand everything through observation over time of the inputs and outputs

### Kalman filter

Reference:

1. <https://nrotella.github.io/journal/kalman-filter-derivation-interpretation.html>
2. <https://arxiv.org/pdf/1910.03558.pdf>
3. <https://inst.eecs.berkeley.edu/~ee126/sp18/projection.pdf>

## 8 Transfer functions
### Transfer functions for linear systems
Consider a linear input/output system described by
$$
\frac{\mathrm{d}^n y}{\mathrm{d}t^n} + a_1\frac{\mathrm{d}^{n-1} y}{\mathrm{d}t^{n-1}} + \dots + a_n y = b_0\frac{\mathrm{d}^m u}{\mathrm{d}t^m} + b_1\frac{\mathrm{d}^{m-1} u}{\mathrm{d}t^{m-1}} + \dots + b_m u
$$
Let the input be $u(t) =e^{st}$, the transfer function is
$$
G(s) = \frac{b(s)}{a(s)} = \frac{b_0 s^m + b_1 s^{m-1} + \dots + b_m}{s^n + a_1 s^{n-1} + \dots + a_n}
$$
$a(s)$ is the characteristic polynomial of the ODE

### Transfer function of common ODEs
The transfer function of a PID controller described by the ODE
$$
y=k_pu+k_d\dot{u}+k_i\int u
$$
is
$$
H(s) = \frac{Y(s)}{U(s)} = k_p + k_d s + \frac{k_i}{s}
$$
### Gains, Poles and Zeros
The *zero frequency gain* of a system is given by $|H(0)|$. It represents the ratio of steady state value of output with respect to a step input ($u = e^{st}$ for $s = 0$; by final value theorem, $|\lim_{s\rightarrow 0}(s\cdot H(s)U(s))| = |H(0)|$, $U(s) = 1/s $ is the transfer function of a unit step

For a linear input/output system with a rational transfer function
$$
G(s) = \frac{b(s)}{a(s)}
$$
if $p$ is a pole i.e. $a(p) = 0$, then $y(t) = e^{pt}$ is a solution of the linear ODE with $u = 0$ (homogeneous solution). A pole corresponds to a mode of the system with corresponding modal solution $e^{pt}$. The unforced motion of the system after an arbitrary excitation is a weighted sum of modes. A transfer function is unstable if some pole $p$ has $\mathfrak{Re}(p) \ge 0$.

if $z$ is a zero i.e. $b(z) = 0$, since the pure exponential output corresponding to the input $u(t) = e^{st}$ with $a(z) \ne 0$ is $G(s)e^{st}$, which is zero if $b(s) = 0$. Zeros block transmission of the corresponding exponential signal.

To find zeros of a state space system, substitue $u(t) = u_0 e^{st}$ and $x(t) = x_0 e^{st}$ in to the system and zeros are values of $s$ s.t.
$$
\begin{bmatrix}
\mathbf{A} - \mathbf{sI} & \mathbf{B} \\
\mathbf{C} & \mathbf{D}
\end{bmatrix}
$$
does not have full rank

#### Extra: final value theorem
If a system described by the time domain signal is $x(t)$ (transfer function is $X(s)$, then provided both limit exists (or $X(s)$ doesn't have poles in the right half plane except possibly a single pole at the origin)), then the steady state value of the signal is
$$
\lim_{t\rightarrow \infty} x(t) = \lim_{s\rightarrow 0} sX(s)
$$
Proven by differentiating the Laplace transform of $x(t)$

### Block diagrams and transfer functions
![block_diagram_series](/md/control_theory/tex/block_diagram_series.png)
![block_diagram_parallel](/md/control_theory/tex/block_diagram_parallel.png)
![block_diagram_feedback](/md/control_theory/tex/block_diagram_feedback.png)

### The Bode Plot
For a transfer function $G(s)$,

the gain is $|G(s)|$ and

the phase is $\arg G(s) = \arctan \frac{\mathfrak{Im} G(s)}{\mathfrak{Re} G(s)}$


### Laplace transform
For LTI system with zero initial state
$$
\mathbf{y}(t) = h(t) * \mathbf{u}(t)
$$
Taking the Laplace transform on both side
$$
Y(s) = H(s)U(s)
$$
$H(s)$ here is the transfer function

For the linear state space system
$$
\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}t} = \mathbf{Ax}+\mathbf{Bu}, \qquad \mathbf{y}=\mathbf{Cx} + \mathbf{Du}
$$
Taking Laplace transform on both sides assuming all initial values are zero:

$$
Y(s) = \Big(\mathbf{C}(s\mathbf{I}-\mathbf{A})^{-1}\mathbf{B}+\mathbf{D}\Big)U(s)
$$
Transfer function (assuming the inverse exists) is
$$
G(s) = \Big(\mathbf{C}(s\mathbf{I}-\mathbf{A})^{-1}\mathbf{B}+\mathbf{D}\Big)
$$

## 9 Frequency domain analysis
### Loop transfer function
![block_diagram_loop_transfer_function](/md/control_theory/tex/block_diagram_loop_transfer_function.png)

Injecting a sinusoid $e^{i\omega_0}$ at point $A$, the system is oscillating if $B$ is the same sinusoid with the same amplitutde and phase. Tracing signals around the loop, $x = -xL(i\omega_0) \Rightarrow L(i\omega_0) = -1$

### Nyquist Criterion
#### Nyquist plot
The Nyquist "D contour" is

![nyquist_d_contour](/md/control_theory/tex/nyquist_d_contour.png)

$R \rightarrow \infty$ and the middle semi-circle to the right (applies to every pole) is to avoid any poles on the imaginary axis

The Nyquist plot is the locus of the loop transfer function $L(s)$ when $s$ traverses $\Gamma$ in the clockwise direction

$L(i\omega_0)=-1$ if the Nyquist plot passes through $L=-1$, the *critical point*.

Simplified Nyquist criterion: Let $L(s)$ be the loop transfer function for a negative feedback system and assume that $L$ has no poles for $\mathfrak{Re} s \ge 0$ except for a single pole on the imaginary axis. Then the closed loop system is stable iff closed contour given by $\Omega = \{L(i\omega) : -\infty < \omega < \infty\} \subset \mathbb{C}$ has no net encirclement of the critical points $s = -1$

Intuition: System is stable when $|L(i\omega)| < 1$. If $-1$ is on the left side of the Nyquist plot then system is stable.

### General Nyquist Criterion
Nyquist's stability theorem: Consider a closed loop system with the loop transfer function $L(s)$ that has $P$ poles in the region enclosed by the Nyquist contour. Let $N$ be the net number of clockwise encirclement of $-1$ by $L(s)$ when $s$ encircles the Nyquist contour $\Gamma$ in the clockwise direction. The closed loop system then has $Z = N + P$ poles in the right half-plane (Nyquist contour when $R\rightarrow \infty$ and $r\rightarrow 0$).

The system is stable when $Z = 0$. It turns out $Z$ is the number of zeros enclosed by the contour.

(see complex analysis math review; image of $1+L(s)$ is a shifted version of $L(s)$)

Ref: <https://en.wikipedia.org/wiki/Nyquist_stability_criterion#Mathematical_derivation>

## 10 PID control
### PID
![block_diagram_pid](/md/control_theory/tex/block_diagram_pid.png)

The input/output relation for an ideal PID controller with error feedabck is
$$
u = k_p e + k_i \int_0^t e(\tau)\mathrm{d}\tau + k_d\frac{\mathrm{d}e}{\mathrm{d}t}=k_p\Big(e+\frac{1}{T_i}\int_0^te(\tau)\mathrm{d}\tau+T_d\frac{\mathrm{d}e}{\mathrm{d}t}\Big)
$$

Let the process and a controller with **pure proportional control** have transfer functions $P(s)$ and $C(s) = k$ (gain), the transfer function from reference to input is 
$$
G_{yr} = \frac{PC}{1 + PC}
$$
The steady state error for a unit step is (by the final value theorem; $U(s) = 1/s$ is the transfer function of a unit step)
$$
1 - \lim_{s\rightarrow 0} (s\cdot G_{yr}(s)U(s)) = 1 - G_{yr}(0) = \frac{1}{1 + k P(0)}
$$
Therefore, the system inherently has a steady state error

But for a PID controller, let $C(s)$ be the transfer function of the PID controller
$$
C(s) = k_p + k_d s + \frac{k_i}{s}
$$
Then $C(0) = \infty$ and from above (substituting $C(s)$), $1 - G_{yr}(0) = 0$. No steady state error for a step input.

## 11 Frequency domain design
### Sensitivity functions
The sensitivity function is
$$
S=\frac{1}{1+PC}
$$
### Feedback design via loop shaping
Bending the Nyquist curve away from the critical point by choosing a compensator that gives the loop transfer function the desired shape.
### Fundamental limitations
#### All pass and minimum phase functions
##### All pass functions
Let $\mathcal{S}$ be the set of all stable, proper (defined here as degree of numerator being less than or equal to degree of denominator), real rational functions.

A function in $\mathcal{S}$ is *all-pass* if its magnitude is $1$ at all points on the imaginary axis.
$$
\forall \omega\in \mathbb{R}, |S(j\omega)| = 1 \Rightarrow S(j \omega)\overline{S(j \omega)} = S(j \omega)S(-j\omega) = 1 
$$
The conjugation from outside goes into the function argument because $S$ is holomorphic whose restrictions to real numbers are real valued

If $S(s)$ doesn't have the same number of poles and zeros with coefficient of highest degree of $s$ on numerator and denominator be the same then $\lim_{\omega \rightarrow \infty} |S(j\omega)| \neq 1 $ which is a contradiction. So let (in general for complex valued transfer function)
$$
S(s) = e^{j\phi} \prod_i\frac{s - z_i}{s- p_i}, \qquad \forall (a, b), z_a\neq p_b
$$
$$
\lvert S(j\omega) \rvert = \Bigg\lvert\prod_i\frac{j\omega - z_i}{j\omega- p_i}\Bigg\rvert = 1
$$
$$
\lvert j\omega - p_i\rvert = \lvert\overline{-(j\omega - p_i)}\rvert = \lvert j\omega + \overline{p_i} \rvert
$$
Therefore, by unique factorization of polynomials, $ \{z_a\} = \{-\overline{p_b}\} $. 
$$
S_{ap}(s) = e^{j\phi} \prod_i\frac{s - z_i}{s+ \overline{z_i}}, \qquad \mathfrak{Re}(z_i)>0
$$
Note $\mathfrak{Re}(z_i) > 0$ because $S$ is stable (all poles must be on the left half plane)

If $S$ is real valued for real input, then poles appear in conjugate pairs and
$$
S_{ap}(s) = \plusmn \prod_i \frac{s - z_i}{s + z_i} = \plusmn \prod_i \frac{s + p_i}{s - p_i}, \qquad \mathfrak{Re}(z_i)>0
$$
##### Minimum phase function
A function $S_{mp} \in \mathcal{S}$ is a *minimum-phase* function if there are no zeros in $\mathfrak{Re}(s) > 0$. (Or equivalently, $S_{mp}^{-1} \in \mathcal{S}$ because no poles or zeros are on $\mathfrak{Re}(q) > 0$)

Examples: $1, \frac{1}{s+1}, \frac{s}{s+1}, \frac{s + 2}{s^2+s+1} $

It's called minimum phase because for the same gain, the phase lag across (or group delay) is the minimum (better than when the zeros are on $\mathfrak{Re}(s) > 0$). For example, $a > 0, S(s) = \frac{a - s}{a + s}$ has phase $\arg S(j\omega) = -2 \arctan \frac{\omega}{a}$ for the gain $1$ but the transfer function $S(s) = 1$ would have no phase lags across.

##### Factorization
For any function $S \in \mathcal{S}$, $S$ can be factored into
$$
S = S_{ap}S_{mp}
$$
Proof sketch: a proper function in $\mathcal{S}$ would have all the poles $\mathfrak{Re}(p) < 0$, and each zero in the numerator would correspond to a pole in the denominator, therefore $S_{mp}$ is simply the remaining factors of the poles for $S / S_{ap}$.

#### Bode's integral formula
Let $S(s) = (1 + L(s))^{-1}$ have no poles in the right half plane and have $q\ge 0$ zeros in the closed right half plane at $p_1, \dots, p_q$, and $L(s)$ be a proper, scalar rational transfer function of relative degree $\ge$ 2. Then,
$$
\int_0^{\infty} \ln \lvert S(j\omega)\rvert \mathrm{d}\omega = \pi \sum_{k=1}^q p_k
$$
Note that $\sum p_k = \sum \mathfrak{Re}p_k$ because poles are in complex conjugate pairs

This has the implication of the waterbed effect: disturbance attenuation can only be improved at one location and be worse at another location at the same time.


Ref: <https://faculty.washington.edu/chx/teaching/loopshaping/Proof_bodeIntegralThm.pdf>
