# 1 Binomial No-Arbitrage Pricing Model
## 1.1 One Period Binomial Model
### no arbitrage condition
$$
0 < d < 1 + r < u. \quad (1.1.2)
$$
### delta hedging formula

$\Delta_0$: shares of stock at time zero

$S_1$: stock price at time one

$V_1$: derivative priced at time one

$$
\Delta_0 = \frac{V_1(H) - V_1(T)}{S_1(H) - S_1(T)}. \quad (1.1.9)
$$

### risk-neutral pricing formula
Derivative that pays $V_1$ at time one should be priced at

$$
V_0 = \frac{1}{1+r}[\tilde p V_1(H) + \tilde q V_1(T)]. \quad (1.1.10)
$$
$$
\tilde p = \frac{1+r-d}{u-d}, \quad \tilde q = \frac{u-1-r}{u-d}. \quad (1.1.8)
$$

## 1.2 Multiperiod Binomial Model
### wealth equation
$$
X_{n+1} = \Delta_n S_{n+1} + (1+r)(X_n - \Delta_n S_n). \quad (1.2.14)
$$

### Replication in the multiperiod binomial model
$$
V_n(\omega_1\omega_2\dots\omega_n) = \frac{1}{1+r}[\tilde p V_{n+1}(\omega_1\omega_2\dots\omega_nH) + \tilde q V_{n+1}(\omega_1\omega_2\dots\omega_nT)]. \quad (1.2.16)
$$
$$
\Delta_n(\omega_1\omega_2\dots\omega_n) = \frac{V_{n+1}(\omega_1\omega_2\dots\omega_nH) - V_{n+1}(\omega_1\omega_2\dots\omega_nT)}{S_{n+1}(\omega_1\omega_2\dots\omega_nH) - S_{n+1}(\omega_1\omega_2\dots\omega_nT)}. \quad (1.2.17)
$$
With all the above and set $X_0 = V_0$, they imply
$$
X_n(\omega_1\omega_2\dots\omega_n) = V_n(\omega_1\omega_2\dots\omega_n). \quad (1.2.18)
$$

# 2 Probability theory on Coin Toss Space
Define $\mathbb{\tilde{E}}_n{[X]}$ to be the conditional expectation of the random variable $X$ based on information at time n (using risk neutral probabilities $\tilde p$ and $\tilde q$)

$$
S_n(\omega_1\omega_2\dots\omega_n) = \frac{1}{1+r}[\tilde p S_{n+1}(\omega_1\omega_2\dots\omega_nH) + \tilde q S_{n+1}(\omega_1\omega_2\dots\omega_nT)]. \quad (2.3.3)
$$
$$
\mathbb{\tilde{E}}[S_{n+1}]_n(\omega_1\omega_2\dots\omega_n) = \tilde p S_{n+1}(\omega_1\omega_2\dots\omega_nH) + \tilde q S_{n+1}(\omega_1\omega_2\dots\omega_nT). \quad (2.3.4)
$$
$$
S_n = \frac{1}{1+r}\mathbb{\tilde{E}}_n[S_{n+1}]. \quad (2.3.5)
$$

## 2.4 Martingales
$$
\frac{S_n}{{(1+r)}^n} = \mathbb{\tilde{E}}_n\bigg[\frac{S_{n+1}}{{(1+r)}^{n+1}}\bigg]. \quad (2.4.1)
$$
This says best estimate based on the information at time $n$ of the value of the discounted stock price at time $n+1$ is the discounted stock price at time $n$. The risk neutral probabilities are chosen to enforce this fact. Processes that satisfy this condition is called martingales.

Similarly defined for actual probabilities $p$ and $q$ for $\mathbb{E}$

If
$$
M_n = \mathbb{E}_n[M_{n+1}], \enspace n \in [0, N-1]. \quad (2.4.2)
$$
then this process is a martingale

$$
\frac{X_n}{{(1+r)}^n} = \mathbb{\tilde{E}}_n\bigg[\frac{X_{n+1}}{{(1+r)}^{n+1}}\bigg], \enspace n \in [0, N-1]. \quad (2.4.7)
$$
$$
\mathbb{\tilde{E}}_n\bigg[\frac{X_{n}}{{(1+r)}^{n}}\bigg] = X_0, \enspace n \in [0, N]. \quad (2.4.8)
$$

### Risk neutral pricing formula
$$
\frac{V_n}{{(1+r)}^n} = \mathbb{\tilde{E}}_n\bigg[\frac{V_{n+1}}{{(1+r)}^{n+1}}\bigg], \enspace n \in [0, N-1]. \quad (2.4.12)
$$

## 2.5 Markov processes
For the binomial pricing model, if for every $n \in [0, N-1]$ and for every $f(x)$ there is another $g(x)$ (depending on $n$ and $f$) s.t.
$$
\mathbb{E}_n[f(X_{n+1})] = g(X_n), \quad (2.5.1)
$$
then $X_n$ for $n \in [0, N-1]$ is a Markov process.

(The martingale is a special case of this with $f(x)=x$ and $g(x)=x$. Not all martingale is a markov process as for every $f$ there must be a $g$, also not all markov process is a martingale)

The stock price process is Markov (under actual or risk-neutral probability measure) because
$$
\mathbb{E}_n[f(S_n)] = g(S_n)
$$
$$
g(x) = pf(ux) + qf(dx)
$$

Pricing of derivative security whose payoff at time $N$ is a function $v_n$ of the stock price $S_n$ i.e. $V_N = v_N(S_N)$:

From risk-neutral pricing formula $(2.4.12)$, we can prove that $V_n = v_n(S_n)$ in general, and we can compute the functions $v_n$ by
$$
v_n(s) = \frac{1}{1+r}\bigg[\tilde{p}v_{n+1}(us) + \tilde{q}v_{n+1}(ds)\bigg], \enspace N = N - 1, N - 2, \dots, 0. \quad (2.5.2)
$$
For the call, $v_N(s) = (s - K)^+$; for the put, $v_N(s) = (K - s)^+$

### Multi-step ahead Markov property
If $X_n$ is a Markov process, then for any function $h$, there's another function $g$ s.t.
$$
\mathbb{E}_n[h(X_m)]=g(X_n), \enspace 0 \le n \le m \lt N. \quad (2.5.6)
$$

### Algorithm to compute price of security whose payoff is a function of a Markov process at time $N$
#### Theorem $(2.5.8)$
If $V_N = v_N(X_N)$ for a Markov process $X_n$ under the risk neutral probability measure $\mathbb{\tilde{P}}$, then by risk-neutral pricing formula $(2.4.11)$ and the multi-step ahead Markov property, then
$$
V_n = v_n(X_n), \enspace n \in [0, N]. \quad (2.5.10)
$$
And there's a recursive algorithm to compute $v_n$ depending on the underlying Markov process (same holds for multidimensional Markov process)

# 4. American derivative securities
## 4.2 Non-path dependent American derivatives
In the $N$-period binomial, if the payoff of a derivative security is $g(S_N)$ at time $N$, by $(2.5.8)$ ($V_n = v_n(S_n)$), the risk-neutral pricing formula, and its Markov simplification $(2.5.2)$, the function $v_n$ of the stock at that time is defined by the European algorithm:
$$
v_N(s) = \max{\{g(s), 0\}}, \quad (4.2.1) \\
v_n(s) = \frac{1}{1+r}\bigg[\tilde{p}v_{n+1}(us) + \tilde{q}v_{n+1}(ds)\bigg], \enspace N = N - 1, N - 2, \dots, 0. \quad (4.2.2)
$$
The replicating portfolio is
$$
\Delta_n = \frac{v_{n+1}(uS_n) - v_{n+1}(dS_n)}{(u-d)S_n}, \enspace n \in [0, N] \quad (4.2.3)
$$

For an American derivative security, the holder of the derivative security can exercise and receive payment $g(S_n)$ (this sections assumes payoff depends only on the current stock price $S_n$ at the time of exercise, not on the stock price path). Thus the portfolio that hedges a short position should have
$$
X_n \ge g(S_n), \enspace n \in [0, N]. \quad (4.2.4)
$$
The American algorithm:
$$
v_N(s) = \max{\{g(s), 0\}}, \quad (4.2.5) \\
v_n(s) = \max{\bigg\{g(s), \frac{1}{1+r}\bigg[\tilde{p}v_{n+1}(us) + \tilde{q}v_{n+1}(ds)\bigg]\bigg\}}, \enspace N = N - 1, N - 2, \dots, 0. \quad (4.2.6)
$$

---

# 1. General Probability Theory
## 1.1 Infinite probability spaces
### Definition 1.1.1
Let $\Omega$ be a nonempty set, and let $\mathcal{F}$ be a collection of subsets of $\Omega$. Define $\mathcal{F}$ to be a $\sigma$-algebra (or $\sigma$-field) if

- (i) $\varnothing \in \mathcal{F}$
- (ii) set $ A \in \mathcal{F} \implies A^c \in \mathcal{F}$
- (iii) a sequence of sets $ {A_1, A_2, \dots} \in \mathcal{F} \implies \cup_{n=1}^\infty A_n \in \mathcal{F}$

Note (ii) and (iii) $\implies \cap_{n=1}^\infty A_n \in \mathcal{F}$ 

### Definition 1.1.2
Let $\Omega$ be a nonempty set, and $\mathcal{F}$ be a $\sigma$-algebra of subets of $\Omega$. A probability measure $\mathbb{P}$ is a function that, to every set $A \in \mathcal{F}$, assigns a number in $[0,1]$, called the probability of A and written $\mathbb{P}(A)$. Requirements:

- (i) $\mathbb{P}(\Omega)=1$
- (ii) $A_1, A_2, \dots$ is a sequence of disjoint sets in $\mathcal{F} \implies$
$$
\mathbb{P}\Bigg(\bigcup_{n=1}^\infty A_n\Bigg) = \sum_{n=1}^\infty \mathbb{P}(A_n).
$$
The triple $(\Omega, \mathcal{F}, \mathbb{P})$ is called a probability space.

### Borel sets
The $\sigma$-algebra obtained by beginning with closed intervals and adding everything else necessary in order to have a $\sigma$-algebra is called the Borel $\sigma$-algebra of subsets of the closed intervals, e.g. denoted by $\mathcal{B}[0,1]$. The sets in this $\sigma$-algebra are called Borel sets. These are the subsets of $[0,1]$. Same goes for $\mathcal{B}(\mathbb{R})$, the collection of Borel subsets of $\mathbb{R}$, called Borel $\sigma$-algebra of $\mathbb{R}$.

## 1.2 Random variables and distributions
### Definition 1.2.1
Let $(\Omega,\mathcal{F},\mathbb{P})$ be a probability space. A random variable is a real-valued function $X$ defined on $\Omega$ with the property that for every Borel subset $B$ of $\mathbb{R}$, the subset of $\Omega$ given by
$$
\set{X\in B} = \set{\omega \in \Omega; X(\omega) \in B} \quad (1.2.1)
$$
is in the $\sigma$-algebra $\mathcal{F}$. (Sometimes a random variable taking values $+\infty$ and $-\infty$ is permitted)

## 1.6 Change of measure
### Theorem 1.6.1
Let $(\Omega,\mathcal{F},\mathbb{P})$ be a probability space and let $Z$ be an almost surely nonnegative random variable with $\mathbb{E}Z=1$. For $A \in \mathcal{F}$, define
$$
\mathbb{\tilde{P}}(A) = \int_A Z(\omega) \mathrm{d} \mathbb{P}(\omega). \quad (1.6.3)
$$
Then $\mathbb{\tilde{P}}$ is a probability measure. Furthermore, if $X$ is a nonnegative random variable, then
$$
\mathbb{\tilde{E}}X = \mathbb{E}[XZ]. \quad (1.6.4)
$$
If $Z$ is almost surely strictly positive, we also have
$$
\mathbb{E}Y = \mathbb{\tilde{E}}\bigg[\frac{Y}{Z}\bigg] \quad (1.6.5)
$$
for every nonnegative random variable $Y$.

Note $\mathbb{\tilde{E}}X = \int_\Omega X(\omega) \mathrm{d} \mathbb{\tilde{P}}(\omega)$.

### Definition 1.6.3
Let $\Omega$ be a nonempty set and $\mathcal{F}$ a $\sigma$-algebra of subsets of $\Omega$. Two probability measures $\mathbb{P}$ and $\mathbb{\tilde{P}}$ on $(\Omega, \mathcal{F})$ are said to be equivalent if they agree which sets in $\mathcal{F}$ have probability zero.

### Definition 1.6.5
Let $(\Omega,\mathcal{F},\mathbb{P})$ be a probability space, let $\mathbb{\tilde{P}}$ be another probability measure on $(\Omega,\mathcal{F})$ that is equivalent to $\mathbb{P}$, and let $Z$ be an almost suerly positive random variable that relates $\mathbb{P}$ and $\mathbb{\tilde{P}}$ via $(1.6.3)$. Then $Z$ is called the Radon-Nikodym derivative of $\mathbb{\tilde{P}}$ with respect to $\mathbb{P}$, written
$$
Z= \frac{\mathrm{d}\mathbb{\tilde{P}}}{\mathrm{d}\mathbb{P}}.
$$

# 2 Information and conditioning
## 2.1 Information and $\sigma$-algebras
### Definition 2.1.1
Let $\Omega$ be a nonempty set. Let $T > 0$ be fixed and assume that for each $t \in [0, T]$, there is a $\sigma$-algebra $\mathcal{F}(t)$. Assume further that if $s \le t$, then every set in $\mathcal{F}(s)$ is also in $\mathcal{F}(t)$. Then we call the collection of $\sigma$-algebras $\mathcal{F}(t)$, $t \in [0,T]$, a **filtration**.

### Definition 2.1.3
Let $X$ be a random variable defined on a nonempty sample space $\Omega$. The **$\sigma$-algebra generated by $X$**, denoted $\sigma(X)$, is the collection of all subsets of $\Omega$ of the form $\Set{X \in B}$, where $B$ ranges over the Borel subsets of $\mathbb{R}$.

### Definition 2.1.5
Let $X$ be a random variable defined on a nonempty sample space $\Omega$. Let $\mathcal{G}$ be a $\sigma$-algebra of subsets of $\Omega$. If every set in $\sigma(X)$ is also in $\mathcal{G}$, we say that $X$ is **$\mathcal{G}$-measurable**.

A random variable $X$ is $\mathcal{G}$-measurable iff the information in $\mathcal{G}$ is sufficient to determine the value of $X$.

### Definition 2.1.6
Let $\Omega$ be a nonempty sample space equipped with a filtration $\mathcal{F}(t)$, $t \in [0,T]$. Let $X(t)$ be a collection of random variables indexed by $t \in [0,T]$. We say this collection of random variables is an **adapted stochastic process** if, for each $t$, the random variable $X(t)$ is $\mathcal{F}(t)$-measurable.

## 2.2 Independence
### Definition 2.2.1
Let $(\Omega, \mathcal{F}, \mathbb{P})$ be a probability space, and let $\mathcal{G}$ and $\mathcal{H}$ be sub-$\sigma$-algebra of $\mathcal{F}$ (i.e. the sets in $\mathcal{G}$ and the sets in $\mathcal{H}$ are also in $\mathcal{F}$). We say these two **$\sigma$-algebras are independent** if
$$
\mathbb{P}(A\cap B) = \mathbb{P}(A) \cdot \mathbb{P}(B) \enspace \forall A \in 
\mathcal{G}, B \in \mathcal{H}
$$

Let $X$ and $Y$ be random variables on $(\Omega, \mathcal{F}, \mathbb{P})$. We say these two **random variables are independent** if the $\sigma$-algebras they generate, $\sigma(X)$ and $\sigma(Y)$, are independent. We say that the random variable $X$ is **independent of the $\sigma$-algebra** $\mathcal{G}$ if $\sigma(X)$ and $\mathcal{G}$ are independent.

# 3 Brownian Motion
## 3.2 Scaled random walks
### 3.2.1 Symmetric random walk
Denote the successive outcome of a fair coin toss by $\omega=\omega_1\omega_2\omega_3\dots, \enspace \omega_i \in \set{H, T}$. Let
$$
X_j = \begin{cases}
1 & \mathrm{if} \, \omega_j = H, \\
-1 & \mathrm{if} \, \omega_j = T, \\
\end{cases}
\quad (3.2.1)
$$
and define $M_0 = 0$,
$$
M_k = \sum_{j=1}^k X_j, \, k = 1,2,\dots. \quad (3.2.2)
$$
The process $M_k, \, k=0,1,2,\dots$ is a **symmetric random walk**.

### 3.2.4 Quadratic variation of the symmetric random walk
The **qudratic variation** up to time $k$ is defined to be
$$
[M, M]_k = \sum_{j=1}^k (M_j - M_{j-1})^2 = k. \quad (3.2.6)
$$
Note that this is computed path-by-path, though in this case $\mathrm{Var}(M_k) = \sum_{j=0}^k \mathrm{Var}(X_j) = k$ but this is averaging across all paths.

### 3.2.5 Scaled symmetric random walk
Define the **scaled symmetric random walk**
$$
W^{(n)}(t) = \frac{1}{\sqrt{n}}M_{nt}, \quad (3.2.7)
$$
provided $nt \in \mathbb{Z}$. If $nt \notin \mathbb{Z}$, define $W^{(n)}(t)$ by linear interpolation between its values at the nearest points $s$ and $u$ to the left and right of $t$ for which $ns$ and $nu$ are integers.

If $ns, nt \in \mathbb{Z}$
$$
\mathbb{E}\big(W^{(n)}(t)-W^{(n)}(s)\big) = 0, \enspace
\mathrm{Var}\big(W^{(n)}(t)-W^{(n)}(s)\big) = t - s, \quad (3.2.8)
$$

Quadratic variation of the scaled random walk: for $t \ge 0, nt \in \mathbb{Z}$
$$
[W^{(n)},W^{(n)}](t) = \sum_{j=1}^{nt}\bigg[\frac{1}{\sqrt{n}} X_j\bigg]^2 = t. \quad (3.2.10)
$$

### 3.2.6 Limiting distribution of the scaled random walk
### Theorem 3.2.1 (Central limit).
Fix $t \ge 0$, $W^{(n)}(t) \overset{n \rightarrow \infty}{\sim} \mathcal{N}(0, t)$

### 3.2.7 Log-normal distribution as the limit of the binomial model
For the binomial stock price model with up and down factor $u_n = 1 + \frac{\sigma}{\sqrt{n}}$, $d_n = 1 - \frac{\sigma}{\sqrt{n}}$, the risk-neutral probabilities are
$$
\tilde{p} = \frac{1+r-d_n}{u_n-d_n} = \frac{1}{2}, \quad
\tilde{q} = \frac{u_n-1-r}{u_n-d_n} = \frac{1}{2}.
$$
The random walk $M_{nt}$ is the number of heads minus the number of tails in $nt$ coin tosses:
$$
nt = H_{nt} + T_{nt} \\
M_{nt} = H_{nt} - T_{nt} \\
H_{nt} = \frac{1}{2}(nt + M_{nt}), \quad
T_{nt} = \frac{1}{2}(nt - M_{nt}) \\
$$

The stock price at time $t$ is
$$
S_n(t) = S(0)u_n^{H_{nt}}d_n^{T_{nt}} = S(0)\bigg(1 + \frac{\sigma}{\sqrt{n}}\bigg)^{\frac{1}{2}(nt+M_{nt})}\bigg(1 - \frac{\sigma}{\sqrt{n}}\bigg)^{\frac{1}{2}(nt-M_{nt})}. \quad (3.2.15)
$$

### Theorem 3.2.2
As $n \rightarrow \infty$, the distribution of $S_n(t)$ in $(3.2.15)$ converges to the distribution of
$$
S(t) = S(0)\bigg\{\sigma W(t)-\frac{1}{2}\sigma^{2}t\bigg\}, \quad (3.2.16)
$$
where $W(t) \sim \mathcal{N} (0, t)$

This distribution $S(t)$ is called **log-normal**



## 3.3 Definition of Brownian motion
### Definition 3.3.1
Let $(\Omega, \mathcal{F}, \mathbb{P})$ be a probability space. $\forall \omega \in \Omega$, suppose there is a continuous function $W(t), t \ge 0$, that satisfies $W(0) = 0$ and that depends on $\omega$. Then $W(t), t \ge 0$, is a Brownian motion if $\forall \set{t_i}, 0 = t_0 < t_1 < \cdots < t_m$ the increments
$$
W(t_1) = W(t_1) - W(t_0), W(t_2) - W(t_1), \dots, W(t_m) - W(t_{m-1}) \quad (3.3.1)
$$
are independent and each of these increments is normally distributed with
$$
\mathbb{E}[W(t_{i+1})-W(t_i)] = 0 \quad (3.3.2) \\
\mathrm{Var}{[W(t_{i+1})-W(t_i)]} = t_{i+1} - t_i \quad (3.3.3)
$$

## 3.4.2 Quadratic variation
### Definition 3.4.1
Let $f(t)$ be a function defined $0 \le t \le T$. The **quadratic variation** of $f$ up to time $T$ is 
$$
[f,f](T) = \lim_{\lVert\Pi\rVert\rightarrow 0}\sum_{j=0}^{n-1}[f(t_{j+1})-f(t_j)]^2. \quad (3.4.5)
$$
where $\Pi = \set{ t_0, t_1, \dots, t_n }$ and $0 = t_0 < t_1 < \cdots < t_n = T$.

#### Remark 3.4.2
Suppose the function $f$ has continuous derivative, then
$$
[f,f](T) = 0
$$

### Theorem 3.4.3
Let $W$ be a Brownian motion. Then $[W,W](T)=T, \,\forall T \ge 0$ almost surely.

Informally
$$
\mathrm{d}W(t)\mathrm{d}W(t) = \mathrm{d}t, \quad (3.4.10) 
$$

# 4 Stochastic Calculus
## 4.2 Ito's Integral for Simple Integrands
Assume $\Delta(t)$ to be a simple process. (constant in each subinterval)
$$
\int_0^T\Delta(t)\mathrm{d}W(t). \quad (4.2.1)
$$

For $t_k \le t \le t_{k+1}$,
$$
I(t) = \sum_{j=0}^{k-1}\Delta(t_j)[W(t_{j+1})-W(t_j)]+\Delta(t_k)[W(t)-W(t_k)]. \quad (4.2.2)
$$

Think of $\set{t_i}$ as the trading dates and think $\set{\Delta(t_i)}$ as the position taken in the asset at each trading date and held to the next trading date. (Note: this is the sum of the position times the stock price difference for the previous $k$ days + the current day gain/loss)

Taking $t=t_n=T$, $(4.2.2)$ provides a definition of $(4.2.1)$.

### Theorem 4.2.2 Ito isometry
The Ito integral defined by $(4.2.2)$ satisfies
$$
\mathbb{E}I^2(t) = \mathbb{E}\int_0^t\Delta^2(u)\mathrm{d}u. \quad (4.2.6)
$$

### Theorem 4.2.3
The quadratic variation accumulated up to time $t$ by the Ito integral $(4.2.2)$ is
$$
[I,I](t) = \int_0^T\Delta^2(u)\mathrm{d}u. \quad (4.2.8)
$$

The Ito integral can be written in differential form as $\mathrm{d}I(t) = \Delta(t)\mathrm{d}W(t)$. Then with $(3.4.10)$,
$$
\mathrm{d}I(t)\mathrm{d}I(t) = \Delta^2(t)\mathrm{d}t. \quad (4.2.10)
$$
