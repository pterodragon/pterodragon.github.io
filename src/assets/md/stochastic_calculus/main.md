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
