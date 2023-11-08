# 1 Binomial No-Arbitrage Pricing Model
## 1.1 One Period Binomial Model
### no arbitrage condition
$$
0 < d < 1 + r < u. \tag{1.1.2}
$$
### delta hedging formula

$\Delta_0$: shares of stock at time zero

$S_1$: stock price at time one

$V_1$: derivative priced at time one

$$
\Delta_0 = \frac{V_1(H) - V_1(T)}{S_1(H) - S_1(T)}. \tag{1.1.9}
$$

### risk-neutral pricing formula
Derivative that pays $V_1$ at time one should be priced at

$$
V_0 = \frac{1}{1+r}[\tilde p V_1(H) + \tilde q V_1(T)]. \tag{1.1.10}
$$
$$
\tilde p = \frac{1+r-d}{u-d}, \quad \tilde q = \frac{u-1-r}{u-d}. \tag{1.1.8}
$$

## 1.2 Multiperiod Binomial Model
### wealth equation
$$
X_{n+1} = \Delta_n S_{n+1} + (1+r)(X_n - \Delta_n S_n). \tag{1.2.14}
$$

### Replication in the multiperiod binomial model
$$
V_n(\omega_1\omega_2\dots\omega_n) = \frac{1}{1+r}[\tilde p V_{n+1}(\omega_1\omega_2\dots\omega_nH) + \tilde q V_{n+1}(\omega_1\omega_2\dots\omega_nT)]. \tag{1.2.16}
$$
$$
\Delta_n(\omega_1\omega_2\dots\omega_n) = \frac{V_{n+1}(\omega_1\omega_2\dots\omega_nH) - V_{n+1}(\omega_1\omega_2\dots\omega_nT)}{S_{n+1}(\omega_1\omega_2\dots\omega_nH) - S_{n+1}(\omega_1\omega_2\dots\omega_nT)}. \tag{1.2.17}
$$
With all the above and set $X_0 = V_0$, they imply
$$
X_n(\omega_1\omega_2\dots\omega_n) = V_n(\omega_1\omega_2\dots\omega_n). \tag{1.2.18}
$$

# 2 Probability theory on Coin Toss Space
Define $\mathbb{\tilde{E}}_n{[X]}$ to be the conditional expectation of the random variable $X$ based on information at time n (using risk neutral probabilities $\tilde p$ and $\tilde q$)

$$
S_n(\omega_1\omega_2\dots\omega_n) = \frac{1}{1+r}[\tilde p S_{n+1}(\omega_1\omega_2\dots\omega_nH) + \tilde q S_{n+1}(\omega_1\omega_2\dots\omega_nT)]. \tag{2.3.3}
$$
$$
\mathbb{\tilde{E}}[S_{n+1}]_n(\omega_1\omega_2\dots\omega_n) = \tilde p S_{n+1}(\omega_1\omega_2\dots\omega_nH) + \tilde q S_{n+1}(\omega_1\omega_2\dots\omega_nT). \tag{2.3.4}
$$
$$
S_n = \frac{1}{1+r}\mathbb{\tilde{E}}_n[S_{n+1}]. \tag{2.3.5}
$$

## 2.4 Martingales
$$
\frac{S_n}{{(1+r)}^n} = \mathbb{\tilde{E}}_n\bigg[\frac{S_{n+1}}{{(1+r)}^{n+1}}\bigg]. \tag{2.4.1}
$$
This says best estimate based on the information at time $n$ of the value of the discounted stock price at time $n+1$ is the discounted stock price at time $n$. The risk neutral probabilities are chosen to enforce this fact. Processes that satisfy this condition is called martingales.

Similarly defined for actual probabilities $p$ and $q$ for $\mathbb{E}$

If
$$
M_n = \mathbb{E}_n[M_{n+1}], \enspace n \in [0, N-1]. \tag{2.4.2}
$$
then this process is a martingale

$$
\frac{X_n}{{(1+r)}^n} = \mathbb{\tilde{E}}_n\bigg[\frac{X_{n+1}}{{(1+r)}^{n+1}}\bigg], \enspace n \in [0, N-1]. \tag{2.4.7}
$$
$$
\mathbb{\tilde{E}}_n\bigg[\frac{X_{n}}{{(1+r)}^{n}}\bigg] = X_0, \enspace n \in [0, N]. \tag{2.4.8}
$$

### Risk neutral pricing formula
$$
\frac{V_n}{{(1+r)}^n} = \mathbb{\tilde{E}}_n\bigg[\frac{V_{n+1}}{{(1+r)}^{n+1}}\bigg], \enspace n \in [0, N-1]. \tag{2.4.12}
$$

## 2.5 Markov processes
For the binomial pricing model, if for every $n \in [0, N-1]$ and for every $f(x)$ there is another $g(x)$ (depending on $n$ and $f$) s.t.
$$
\mathbb{E}_n[f(X_{n+1})] = g(X_n), \tag{2.5.1}
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
v_n(s) = \frac{1}{1+r}\bigg[\tilde{p}v_{n+1}(us) + \tilde{q}v_{n+1}(ds)\bigg], \enspace N = N - 1, N - 2, \dots, 0. \tag{2.5.2}
$$
For the call, $v_N(s) = (s - K)^+$; for the put, $v_N(s) = (K - s)^+$

### Multi-step ahead Markov property
If $X_n$ is a Markov process, then for any function $h$, there's another function $g$ s.t.
$$
\mathbb{E}_n[h(X_m)]=g(X_n), \enspace 0 \le n \le m \lt N. \tag{2.5.6}
$$

### Algorithm to compute price of security whose payoff is a function of a Markov process at time $N$
#### Theorem $(2.5.8)$
If $V_N = v_N(X_N)$ for a Markov process $X_n$ under the risk neutral probability measure $\mathbb{\tilde{P}}$, then by risk-neutral pricing formula $(2.4.11)$ and the multi-step ahead Markov property, then
$$
V_n = v_n(X_n), \enspace n \in [0, N]. \tag{2.5.10}
$$
And there's a recursive algorithm to compute $v_n$ depending on the underlying Markov process (same holds for multidimensional Markov process)

# 4. American derivative securities
## 4.2 Non-path dependent American derivatives
In the $N$-period binomial, if the payoff of a derivative security is $g(S_N)$ at time $N$, by $(2.5.8)$ ($V_n = v_n(S_n)$), the risk-neutral pricing formula, and its Markov simplification $(2.5.2)$, the function $v_n$ of the stock at that time is defined by the European algorithm:
$$
v_N(s) = \max{\{g(s), 0\}}, \tag{4.2.1}
$$
$$
v_n(s) = \frac{1}{1+r}\bigg[\tilde{p}v_{n+1}(us) + \tilde{q}v_{n+1}(ds)\bigg], \enspace n = N - 1, N - 2, \dots, 0. \tag{4.2.2}
$$
The replicating portfolio is
$$
\Delta_n = \frac{v_{n+1}(uS_n) - v_{n+1}(dS_n)}{(u-d)S_n}, \enspace n \in [0, N] \tag{4.2.3}
$$

For an American derivative security, the holder of the derivative security can exercise and receive payment $g(S_n)$ (this sections assumes payoff depends only on the current stock price $S_n$ at the time of exercise, not on the stock price path). Thus the portfolio that hedges a short position should have
$$
X_n \ge g(S_n), \enspace n \in [0, N]. \tag{4.2.4}
$$
The American algorithm:
$$
v_N(s) = \max{\{g(s), 0\}}, \tag{4.2.5}
$$
$$
v_n(s) = \max{\bigg\{g(s), \frac{1}{1+r}\bigg[\tilde{p}v_{n+1}(us) + \tilde{q}v_{n+1}(ds)\bigg]\bigg\}}, \enspace n = N - 1, N - 2, \dots, 0. \tag{4.2.6}
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
\set{X\in B} = \set{\omega \in \Omega; X(\omega) \in B} \tag{1.2.1}
$$
is in the $\sigma$-algebra $\mathcal{F}$. (Sometimes a random variable taking values $+\infty$ and $-\infty$ is permitted)

## 1.6 Change of measure
### Theorem 1.6.1
Let $(\Omega,\mathcal{F},\mathbb{P})$ be a probability space and let $Z$ be an almost surely nonnegative random variable with $\mathbb{E}Z=1$. For $A \in \mathcal{F}$, define
$$
\mathbb{\tilde{P}}(A) = \int_A Z(\omega) \mathrm{d} \mathbb{P}(\omega). \tag{1.6.3}
$$
Then $\mathbb{\tilde{P}}$ is a probability measure. Furthermore, if $X$ is a nonnegative random variable, then
$$
\mathbb{\tilde{E}}X = \mathbb{E}[XZ]. \tag{1.6.4}
$$
If $Z$ is almost surely strictly positive, we also have
$$
\mathbb{E}Y = \mathbb{\tilde{E}}\bigg[\frac{Y}{Z}\bigg] \tag{1.6.5}
$$
for every nonnegative random variable $Y$.

Note $\mathbb{\tilde{E}}X = \int_\Omega X(\omega) \mathrm{d} \mathbb{\tilde{P}}(\omega)$.

### Definition 1.6.3
Let $\Omega$ be a nonempty set and $\mathcal{F}$ a $\sigma$-algebra of subsets of $\Omega$. Two probability measures $\mathbb{P}$ and $\mathbb{\tilde{P}}$ on $(\Omega, \mathcal{F})$ are said to be equivalent if they agree which sets in $\mathcal{F}$ have probability zero.

### Definition 1.6.5
Let $(\Omega,\mathcal{F},\mathbb{P})$ be a probability space, let $\mathbb{\tilde{P}}$ be another probability measure on $(\Omega,\mathcal{F})$ that is equivalent to $\mathbb{P}$, and let $Z$ be an almost surely positive random variable that relates $\mathbb{P}$ and $\mathbb{\tilde{P}}$ via $(1.6.3)$. Then $Z$ is called the Radon-Nikodym derivative of $\mathbb{\tilde{P}}$ with respect to $\mathbb{P}$, written
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
\tag{3.2.1}
$$
and define $M_0 = 0$,
$$
M_k = \sum_{j=1}^k X_j, \, k = 1,2,\dots. \tag{3.2.2}
$$
The process $M_k, \, k=0,1,2,\dots$ is a **symmetric random walk**.

### 3.2.4 Quadratic variation of the symmetric random walk
The **qudratic variation** up to time $k$ is defined to be
$$
[M, M]_k = \sum_{j=1}^k (M_j - M_{j-1})^2 = k. \tag{3.2.6}
$$
Note that this is computed path-by-path, though in this case $\mathrm{Var}(M_k) = \sum_{j=0}^k \mathrm{Var}(X_j) = k$ but this is averaging across all paths.

### 3.2.5 Scaled symmetric random walk
Define the **scaled symmetric random walk**
$$
W^{(n)}(t) = \frac{1}{\sqrt{n}}M_{nt}, \tag{3.2.7}
$$
provided $nt \in \mathbb{Z}$. If $nt \notin \mathbb{Z}$, define $W^{(n)}(t)$ by linear interpolation between its values at the nearest points $s$ and $u$ to the left and right of $t$ for which $ns$ and $nu$ are integers.

If $ns, nt \in \mathbb{Z}$
$$
\mathbb{E}\big(W^{(n)}(t)-W^{(n)}(s)\big) = 0, \enspace
\mathrm{Var}\big(W^{(n)}(t)-W^{(n)}(s)\big) = t - s, \tag{3.2.8}
$$

Quadratic variation of the scaled random walk: for $t \ge 0, nt \in \mathbb{Z}$
$$
[W^{(n)},W^{(n)}](t) = \sum_{j=1}^{nt}\bigg[\frac{1}{\sqrt{n}} X_j\bigg]^2 = t. \tag{3.2.10}
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
S_n(t) = S(0)u_n^{H_{nt}}d_n^{T_{nt}} = S(0)\bigg(1 + \frac{\sigma}{\sqrt{n}}\bigg)^{\frac{1}{2}(nt+M_{nt})}\bigg(1 - \frac{\sigma}{\sqrt{n}}\bigg)^{\frac{1}{2}(nt-M_{nt})}. \tag{3.2.15}
$$

### Theorem 3.2.2
As $n \rightarrow \infty$, the distribution of $S_n(t)$ in $(3.2.15)$ converges to the distribution of
$$
S(t) = S(0)\bigg\{\sigma W(t)-\frac{1}{2}\sigma^{2}t\bigg\}, \tag{3.2.16}
$$
where $W(t) \sim \mathcal{N} (0, t)$

This distribution $S(t)$ is called **log-normal**



## 3.3 Definition of Brownian motion
### Definition 3.3.1
Let $(\Omega, \mathcal{F}, \mathbb{P})$ be a probability space. $\forall \omega \in \Omega$, suppose there is a continuous function $W(t), t \ge 0$, that satisfies $W(0) = 0$ and that depends on $\omega$. Then $W(t), t \ge 0$, is a Brownian motion if $\forall \set{t_i}, 0 = t_0 < t_1 < \cdots < t_m$ the increments
$$
W(t_1) = W(t_1) - W(t_0), W(t_2) - W(t_1), \dots, W(t_m) - W(t_{m-1}) \tag{3.3.1}
$$
are independent and each of these increments is normally distributed with
$$
\mathbb{E}[W(t_{i+1})-W(t_i)] = 0 \tag{3.3.2}
$$
$$
\mathrm{Var}{[W(t_{i+1})-W(t_i)]} = t_{i+1} - t_i \tag{3.3.3}
$$

## 3.4.2 Quadratic variation
### Definition 3.4.1
Let $f(t)$ be a function defined $0 \le t \le T$. The **quadratic variation** of $f$ up to time $T$ is 
$$
[f,f](T) = \lim_{\lVert\Pi\rVert\rightarrow 0}\sum_{j=0}^{n-1}[f(t_{j+1})-f(t_j)]^2. \tag{3.4.5}
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
\mathrm{d}W(t)\mathrm{d}W(t) = \mathrm{d}t, \tag{3.4.10} 
$$

# 4 Stochastic Calculus
## 4.2 Ito's Integral for simple integrands
Assume $\Delta(t)$ to be a simple process. (constant in each subinterval)
$$
\int_0^T\Delta(t)\mathrm{d}W(t). \tag{4.2.1}
$$

For $t_k \le t \le t_{k+1}$,
$$
I(t) = \sum_{j=0}^{k-1}\Delta(t_j)[W(t_{j+1})-W(t_j)]+\Delta(t_k)[W(t)-W(t_k)]. \tag{4.2.2}
$$

Think of $\set{t_i}$ as the trading dates and think $\set{\Delta(t_i)}$ as the position taken in the asset at each trading date and held to the next trading date. (Note: this is the sum of the position times the stock price difference for the previous $k$ days + the current day gain/loss)

Taking $t=t_n=T$, $(4.2.2)$ provides a definition of $(4.2.1)$.

### Theorem 4.2.2 Ito isometry
The Ito integral defined by $(4.2.2)$ satisfies
$$
\mathbb{E}I^2(t) = \mathbb{E}\int_0^t\Delta^2(u)\mathrm{d}u. \tag{4.2.6}
$$

### Theorem 4.2.3
The quadratic variation accumulated up to time $t$ by the Ito integral $(4.2.2)$ is
$$
[I,I](t) = \int_0^T\Delta^2(u)\mathrm{d}u. \tag{4.2.8}
$$

The Ito integral can be written in differential form as $\mathrm{d}I(t) = \Delta(t)\mathrm{d}W(t)$. Then with $(3.4.10)$,
$$
\mathrm{d}I(t)\mathrm{d}I(t) = \Delta^2(t)\mathrm{d}t. \tag{4.2.10}
$$

## 4.3 Ito's Integral for general integrands
This section no longer assumes $\Delta(t)$ is a simple process. Assume that $\Delta(t), t\ge 0$ is adapted to the filtration $\mathcal{F}(t), t \ge 0$. Also assume the square integrability condition

$$
\mathbb{E}\int_0^T \Delta^2(t) \mathrm{d} t < \infty \tag{4.3.1}
$$

Choose a sequence $\Delta_n(t)$ of simple processes s.t. these processes converge to the continuously varying $\Delta(t)$. By "converge", 
$$
\lim_{n\rightarrow \infty} \mathbb{E} \int_0^T |\Delta_n(t) - \Delta(t)|^2 \mathrm{d} t = 0 \tag{4.3.2}
$$
Define the Ito integral for the continuously varying integrand $\Delta(t)$ by the formula
$$
\int_0^t \Delta(u) \mathrm{d} W(u) = \lim_{n\rightarrow \infty} \int_0^t \Delta_n(u) \mathrm{d} W(u), \enspace 0 \le t \le T. \tag{4.3.3}
$$

### Theorem 4.3.1
Let $T$ be a positive constant and let $\Delta(t), 0 \le t \le T$ be an adapted stochastic process that satisfies $(4.3.1)$. The $I(t) = \int_0^T \mathrm{d} W(u)$ defined by $(4.3.3)$ has the following properties.

- (i) (Continuity) The paths of $I(t)$ are continuous. 
- (ii) (Adaptivity) for each $t$, $I(t)$ is $\mathcal{F}(t)$-measurable.
- (iii) (Linearity)
- (iv) (Martingale) $I(t)$ is a martingale.
- (v) (Ito isometry) $\mathbb{E}I^2(t) = \mathbb{E} \int_0^t \Delta^2(u) \mathrm{d} u$.
- (vi) (Quadratic variation) $[I,I](t) = \int_0^t \Delta^2(u)\mathrm{d}u$.

## 4.4 Ito-Doeblin formula
### 4.4.1 Formula for Brownian motion
("Chain rule" for stochastic calculus) Ito-Doeblin formula in differential form:
$$
\mathrm{d}f(W(t)) = f'(W(t))\mathrm{d}W(t) + \frac{1}{2} f''(W(t)) \mathrm{d} t. \tag{4.4.1}
$$
Ito-Doeblin formula in integral form:
$$
f(W(t)) - f(W(0)) = \int_0^t f'(W(u))\mathrm{d} W(u) + \frac{1}{2} \int_0^t f''(W(u)) \mathrm{d} u. \tag{4.4.2}
$$

### Theorem 4.4.1 Ito Doeblin formula for Brownian motion
Let $f(t,x)$ be a function for which $f_t(t,x), f_x(t,x), f_{xx}(t,x)$ are defined and continuous, and let $W(t)$ be a Brownian motion. Then $\forall T \ge 0,$
$$
f\big(T, W(T)\big) = f\big(0, W(0)\big) + \int_0^Tf_t\big(t, W(t)\big) \mathrm{d} t \\ 
+ \int_0^T f_x\big(t,W(t)\big) \mathrm{d}W(t) + \frac{1}{2} \int_0^T f_{xx}\big(t,W(t)\big) \mathrm{d}t. \tag{4.4.3}
$$

### Remark 4.4.2
In the differential form,
$$
\mathrm{d}W(t)\,\mathrm{d}W(t) = \mathrm{d}t, \quad \mathrm{d}t \,\mathrm{d}W(t)=\mathrm{d}W(t)\,\mathrm{d}t=0, \quad \mathrm{d}t\,\mathrm{d}t = 0, \tag{4.4.12}
$$

### 4.4.2 Formula for Ito processes
### Definition 4.4.3
Let $W(t), t \ge 0$, be a Brownian motion, and let $\mathcal{F}(t), t \ge 0$, be an associated filtration. An Ito process is a stochastic process of the form
$$
X(t) = X(0) + \int_0^t \Delta(u)\mathrm{d}W(u) + \int_0^t \Theta(u) \mathrm{d} u, \tag{4.4.16}
$$
where $X(0)$ is nonrandom and $\Delta(u)$ and $\Theta(u)$ are adapted stochastic processes.

### Lemma 4.4.4
The quadratic variation of the Ito process $(4.4.16)$ is 
$$
[X,X](t) = \int_0^t\Delta^2(u) \mathrm{d} u \tag{4.4.17}
$$

$$
\mathrm{d}X(t) = \Delta(t)\mathrm{d}W(t) + \Theta(t)\mathrm{d}t \tag{4.4.18}
$$
Using $(4.4.12)$,
$$
\mathrm{d}X(t)\,\mathrm{d}X(t) = \Delta^2(t)\mathrm{d}t \tag{4.4.19}
$$

### Definition 4.4.5
Let $X(t), t \ge 0$, be an Ito process as described in Definition $(4.4.3)$, and let $\Gamma(t), t \ge 0$, be an adapted process. We define the integral with respect to an Ito process
$$
\int_0^t\Gamma(u)\mathrm{d}X(u) = \int_0^t\Gamma(u)\Delta(u)\mathrm{d}W(u) + \int_0^t\Gamma(u)\Theta(u)\mathrm{d}u. \tag{4.4.20}
$$

### Theorem 4.4.6 Ito Doeblin formula for an Ito process
Let $X(t), t \ge 0$ be an Ito process as describedin Definition $(4.4.3)$, and let $f(t, x)$ be a function for which $f_t(t,x), f_x(t,x), f_{xx}(t,x)$ are defined and continuous. Then $\forall T \ge 0,$

$$
\begin{align*}
& f\big(T, X(T)\big) \\
= & f\big(0, X(0)\big) + \int_0^Tf_t\big(t, X(t)\big) \mathrm{d} t \\
& + \int_0^T f_x\big(t,X(t)\big) \mathrm{d}X(t) + \frac{1}{2} \int_0^T f_{xx}\big(t,X(t)\big) \mathrm{d}[X,X](t) \\
= & f\big(0, X(0)\big) + \int_0^Tf_t\big(t, X(t)\big) \mathrm{d} t \\
& + \int_0^T f_x\big(t,X(t)\big) \Delta(t)\mathrm{d}W(t) + \int_0^Tf_x\big(t,X(t)\big)\Theta(t)\mathrm{d}t + \frac{1}{2} \int_0^T f_{xx}\big(t,X(t)\big) \Delta^2(t)\mathrm{d}t. \tag{4.4.22}
\end{align*}
$$

### Remark 4.4.7
Differential notation of $(4.4.22)$
$$
\mathrm{d}f\big(t,X(t)\big) = f_t\big(t,X(t)\big)\mathrm{d}t+f_x\big(t,X(t)\big)\mathrm{d}X(t) + \frac{1}{2}f_{xx}\big(t, X(t)\big)\mathrm{d}X(t)\,\mathrm{d}X(t). \quad(4.4.23)
$$

### Theorem 4.4.9 Ito integral for a deterministic integrand
Let $W(s), s \ge 0$ be a Brownian motion, and let $\Delta(s)$ be a nonrandom *function of time*. Define $I(t) = \int_0^t\Delta(s)\mathrm{d}W(s)$. $\forall t \ge 0$, the random variable $I(t) \sim \mathcal{N}\big(0, \int_0^t\Delta(s)\mathrm{d}s\big)$.

## 4.5 Black Scholes Merton Equation
### 4.5.1 Evolution of portfolio value
Stock modeled by:
$$
\mathrm{d}S(t) = \alpha S(t) \mathrm{d}t + \sigma S(t)\mathrm{d}W(t) \tag{4.5.1}
$$
Remainder of the portfolio $X(t) - \Delta(t)S(t)$ is invested into the money market. Differential of portfolio value:
$$
\begin{align*}
\mathrm{d}X(t) & = \Delta(t)\mathrm{d}S(t)+r\big(X(t)-\Delta(t)s(t)\big)\mathrm{d}t \\
& = rX(t)\mathrm{d}t+\Delta(t)(\alpha-r)S(t)\mathrm{d}t+\Delta(t)\sigma S(t)\mathrm{d}W(t). \tag{4.5.2}
\end{align*}
$$
Let $f(t,x) = e^{-rt}x$ and use the Ito-Doeblin formula,
differential of discounted stock price:
$$
\mathrm{d}\big(e^{-rt}S(t)\big) = (\alpha - r)e^{-rt}S(t)\mathrm{d}t+\sigma e^{rt}S(t)\mathrm{d}W(t). \tag{4.5.4}
$$
Differential of discounted portfolio value:
$$
\mathrm{d}\big(e^{-rt}X(t)\big) = \Delta(t)\mathrm{d}\big(e^{-rt}S(t)\big). \tag{4.5.5}
$$

### 4.5.2 Evolution of option value
Consider an European call option that pays $\big(S(T)-K\big)^+$ at time $T$, and $K > 0$. Let $c(t,x)$ denote the value of the call at time $t$ if the stock price at that time is $S(t) = x$.

The function $c(t, x)$ is nonrandom but $c\big(t, S(t)\big)$ is a stochastic process. Differential of $c\big(t, S(t)\big)$:

$$
\mathrm{d}c\big(t, S(t)\big) \\
= \bigg[c_t\big(t, S(t)\big)+\alpha S(t)c_x\big(t, S(t)\big) + \frac{1}{2}\sigma^2S^2(t)c_{xx}\big(t, S(t)\big)\bigg] \mathrm{d}t \\ 
+ \sigma S(t) c_x\big(t, S(t)\big)\mathrm{d}W(t). \tag{4.5.6}
$$

Let $f(t,x) = e^{-rt}x$ and use the Ito-Doeblin formula, differential of discounted option price:
$$
\mathrm{d}\big(e^{-rt}c(t, S(t))\big) \\
= e^{-rt}\bigg[-rc\big(t, S(t)\big)+c_t\big(t,S(t)\big) + \alpha S(t)c_x\big(t, S(t)\big) + \frac{1}{2}\sigma^2S^2(t)c_{xx}\big(t, S(t)\big)\bigg] \mathrm{d}t \\ 
+ e^{-rt}\sigma S(t) c_x\big(t, S(t)\big)\mathrm{d}W(t). \tag{4.5.7}
$$

### 4.5.3 Equating the evolution
A (short option) hedging portfolio starts with some initial capital $X(0)$ and invests in the stock and money market account so that the portfolio value $X(t)$ at each time $t\in [0,T]$ agrees with $c\big(t, S(t)\big)$. This happens iff
$$
\mathrm{d}\big(e^{-rt}X(t)\big) = \mathrm{d}\big(e^{-rt}c\big(t,S(t)\big)\big) \enspace \forall t \in [0,T). \tag{4.5.8}
$$
and make $X(0) = c\big(0, S(0)\big)$

Comparing $(4.5.5)$ and $(4.5.7)$, $(4.5.8)$ holds iff
$$
\begin{align*}
& \Delta(t)(\alpha-r)S(t)\mathrm{d}t+\Delta(t)\sigma S(t)\mathrm{d}W(t) \\
= & \bigg[-rc\big(t, S(t)\big)+c_t\big(t,S(t)\big) + \alpha S(t)c_x\big(t, S(t)\big) + \frac{1}{2}\sigma^2S^2(t)c_{xx}\big(t, S(t)\big)\bigg] \mathrm{d}t \\ 
& + \sigma S(t) c_x\big(t, S(t)\big)\mathrm{d}W(t). \tag{4.5.10}
\end{align*}
$$
Equating the $\mathrm{d}W(t)$ terms gives the **delta-hedging rule**
$$
\Delta(t)= c_x\big(t, S(t)\big) \enspace \forall t \in [0,T). \tag{4.5.11}
$$
The quantity $c_x\big(t, S(t)\big)$ is called *delta* of the option.

Equating the $\mathrm{d}t$ terms gives
$$
rc\big(t, S(t)\big) = c_t\big(t,S(t)\big) + rS(t)c_x\big(t, S(t)\big) + \frac{1}{2}\sigma^2S^2(t)c_{xx}\big(t, S(t)\big) \enspace \forall t \in [0,T). \tag{4.5.13}
$$

In conclusion we should see a continous function $c(t,x)$ that is a solution to the **Black-Scholes-Merton partial differential equation**
$$
 c_t(t,x) + rxc_x(t, x) + \frac{1}{2}\sigma^2x^2c_{xx}(t, x) =rc(t, x) \enspace \forall t \in [0,T), \, x \ge 0 \tag{4.5.14}
$$
that satisfies the terminal condition
$$
c(T,x) = (x - K)^+. \tag{4.5.15}
$$

### 4.5.4 Solution to the Black-Scholes-Merton Equation

Equation $(4.5.14)$ is a PDE of the type called backward parabolic. For such equation, in addition to the terminal condition $(4.5.15)$, boundary conditions at $x = 0$ and $x = \infty$ are needed in order to determine the solution. Boundary condition at $x = 0$ is obtained by substituting $x = 0$ into $(4.5.14)$:
$$
c_t(t, 0) = rc(t, 0). \tag{4.5.16}
$$
The solution to this ODE is $ c(t, 0) = e^{rt}c(0,0). $

Substituting $t = T$ and by the fact that $c(T, 0) = (0 - K)^+ = 0$, then $c(0,0) = 0$, so *boundary condition at $x = 0$* is
$$
c(t, 0) = 0 \enspace \forall t \in [0, T]. \tag{4.5.17}
$$

As $x \rightarrow \infty$, the function $c(t,x)$ grows without bound. In such a case, the *boundary condition at $x = \infty$* is specified by the rate of growth. One way to do this is:
$$
\lim_{x\rightarrow\infty} \big[c(t,x)-(x-e^{-r(T-t)}K)\big] = 0 \enspace \forall t \in [0,T]. \tag{4.5.18}
$$
The solution to the Black-Scholes-Merton equation $(4.5.14)$ with terminal condition $(4.5.15)$ and boundary conditions $(4.5.17)$ and $(4.5.18)$ is
$$
c(t,x) = xN\big(d_+(T-t,x)\big) - Ke^{-r(T-t)}N\big(d_-(T-t,x)\big), 0 \le t \lt T, x > 0, \tag{4.5.19}
$$
where
$$
d_{\plusmn}(\tau, x) = \frac{1}{\sigma \sqrt{\tau}}\bigg[\log\frac{x}{K}+\bigg(r \plusmn \frac{\sigma^2}{2}\bigg)\tau\bigg], \tag{4.5.20}
$$
and $N$ is the cumulative standard normal distribution
$$
N(y) = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^y e^{-\frac{z^2}{2}}\mathrm{d}z = \frac{1}{\sqrt{2\pi}}\int_y^{-\infty}e^{-\frac{z^2}{2}}\mathrm{d}z \tag{4.5.21}
$$
notation: Call this function Black-Scholes-Merton function
$$
\textrm{BSM}(\tau,x;K,r,\sigma) = x N\big(d_+(\tau, x)\big) - Ke^{-r\tau}N\big(d_-(\tau, x)\big), \tag{4.5.22}
$$

### 4.5.5 The Greeks
The derivatives of the function $c(t,x)$ of $(4.5.19)$ with respect to various variables are called the *Greeks*.

*Delta*:
$$
c_x(t,x) = N\big(d_+(T-t, x)\big)
$$
Derived by considering $d_-^2-d_+^2 = (d_-+d_+)(d_--d_+) = -2\big[\log \frac{x}{K} +r(T-t)\big]$ and $Ke^{-r(T-t)}N'(d_-) = xN'(d_+)$

*Theta*:
$$
c_t(t,x) = -rKe^{r(T-t)}N\big(d_-(T-t,x)\big) - \frac{\sigma x}{2\sqrt{T-t}} N'\big(d_+(T-t, x)\big). \tag{4.5.24}
$$

Note $c_x(t,x) > 0, \enspace c_t(t,x) < 0$ due to $N,N' > 0$

*Gamma*:
$$
c_{xx}(t,x) = N'\big(d_+(T-t, x)\big)\frac{\partial}{\partial x} d_+(T-t, x) = \frac{1}{\sigma x \sqrt{T-t}}N'\big(d_+(T-t, x)\big). \tag{4.5.25}
$$

Note $c_{xx}(t,x) > 0$

If at time $t$ the stock price is $x$, the the short option hedge of $(4.5.11)$ calls for holding $c_x(t,x)$ shares of stock, position value is $xc_x = xN(d_+)$. Hedging portfolio value is $c = xN(d_+) - Ke^{r(T-t)}N(d_-)$, of which $xc_x(t,x)$ is invested in stock. The amount invested in the money market must be
$$
c(t,x) -xc_x(t,x) = -Ke^{-r(T-t)}N(d_-) < 0
$$
To hedge a short position in a call option, one must borrow money.

Note that the portfolio benefits from both instantaneous drop or rise in the stock price. This portfolio is said to be *delta-neutral* ($y=c(t,x)$ is tangent to $c_x(t, x_1)(x-x_1)+c(t,x_1)$ where $x_1$ is the original stock value) and *long gamma* (benefits from the convexity of $c(t,x)$). *Short-delta* means the straight line approximation to the option price for small stock price moves were steeper than the option price curve at the starting point $x_1$

The derivative $\frac{\partial}{\partial \sigma} c$ is called *vega* and is positive. The more volatile the stock is, the high the option price in the BSM model.

### 4.5.6 Put-Call Parity
A **forward contract** with delivery price $K$ obligates its holder to buy one share of the stock at expiration time $T$ in exchange for payment $K$. At expiration, the value of the forward contract is $S(T) -K$. Let $f(t,x)$ denote the value of the forward contract at earlier times $t \in [0,T]$ if the stock price at time $t$ is $S(t) = x$.

The value of a forward contract is given by
$$
f(t,x) = x - e^{-r(T-t)}K. \tag{4.5.26}
$$

The **forward price** of a stock at time $t$ is defined to be the value of $K$ that causes the forward contract at time $t$ to have value zero. (i.e. value of $K$ s.t. $S(t) - e^{-r(T-t)}K = 0$). In a model with a constant interest rate, the forward price at time $t$ is
$$
\mathrm{For}(t) = e^{r(T-t)}S(t). \tag{4.5.27}
$$

Consider a *European put*, which pays off $(K-S(t))^+$ at time $T$. Observe $\forall x$,
$$
x - K = (x - K)^+ - (K - x)^+ \tag{4.5.28}
$$
Denote $p(t,x)$ the value of the European put at time $t$ if the time-$t$ stock price is $S(t) = x$. Similarly $c(t,x)$ for the value of the European call. $(4.5.28)$ implies
$$
f(T, S(T)) = c(T, S(T)) - p(T,S(T))
$$
And thus by continuity, the *put-call parity*
$$
f(t, x) = c(t, x) - p(t,x), \enspace x \ge 0, \enspace 0 \le t \le T. \tag{4.5.29}
$$

For Black-Scholes-Merton put formula, solve $(4.5.29)$ for $f(t,x)$ given by $(4.5.26)$ and BSM call formula by $(4.5.19)$.

## 4.6 Multivariable Stochastic Calculus
### 4.6.1 Multiple brownian motions
### Definition 4.6.1
A $d$-dimensional Brownian motion is a process
$$
W(t) = (W_1(t), \dots, W_d(t))
$$
with the following properties:
- (i) Each $W_i(t)$ is a 1D Brownian motion
- (ii) $i \ne j \implies$ the process $W_i(t)$ and $W_j(t)$ are independent.

Note $\mathrm{d}W_i(t)\mathrm{d}W_i(t)=\mathrm{d}t$, and $\mathrm{d}W_i(t)\mathrm{d}W_j(t)=0, \enspace i \ne j$

### 4.6.2 Ito-Doeblin formula for multiple processes
Let $f(t,x,y)$ be a function which $f_t, f_x, f_y, f_{xx}, f_{xy}, f_{yx}, f_{yy}$ are defined and are continous. Let $X(t)$ and $Y(t)$ be Ito processes:
$$
\mathrm{d}X(t) = \Theta_1(t)\mathrm{d}t + \sigma_{11}(t)\mathrm{d}W_1(t) + \sigma_{12}(t)\mathrm{d}W_2(t), \tag{4.6.1}
$$
$$
\mathrm{d}Y(t) = \Theta_2(t)\mathrm{d}t + \sigma_{21}(t)\mathrm{d}W_1(t) + \sigma_{22}(t)\mathrm{d}W_2(t). \tag{4.6.2}
$$
where $\Theta_i(u), \sigma_{ij}(u)$ are assumed to be adapted processes.
$$
\mathrm{d}X(t)\mathrm{d}Y(t) = \big(\sigma_{11}(t)\sigma_{21}(t) + \sigma_{12}(t)\sigma_{22}(t)\big)\mathrm{d}t. \tag{4.6.5}
$$
which means $\forall T \ge 0$,
$$
[X,Y](T) = \int_0^T\big(\sigma_{11}(t)\sigma_{21}(t) + \sigma_{12}(t)\sigma_{22}(t)\big)\mathrm{d}t. \tag{4.6.6}
$$

$$
\mathrm{d}f(t,X,Y) = f_t \mathrm{d}t+f_x\mathrm{d}X + f_y \mathrm{d}Y + \frac{1}{2}f_{xx}\mathrm{d}X\mathrm{d}X+f_{xy}\mathrm{d}X\mathrm{d}Y + \frac{1}{2}f_{yy}\mathrm{d}Y\mathrm{d}Y. \tag{4.6.9}
$$

### Corollary 4.6.3 Ito product rule
Let $X(t)$ and $Y(t)$ be Ito processes, then
$$
\mathrm{d}\big(X(t)Y(t)\big) = X(t)\mathrm{d}Y(t) + Y(t)\mathrm{d}X(t) + \mathrm{d}X(t)\mathrm{d}Y(t).
$$

# 5 Risk Neutral Pricing
## 5.2 Risk Neutral Measure
### 5.2.1 Girsanov's theorem for a single Brownian motion
Define the *Radon-Nikodym derivative process*
$$
Z(t) = \mathbb{E}[Z|\mathcal{F}(t)], \enspace 0 \le t \le T. \tag{5.2.6}
$$
