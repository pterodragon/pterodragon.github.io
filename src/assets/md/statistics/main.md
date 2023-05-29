# Statistics

### 2.3 Moments and momemt generating functions
For $n \in \mathbb{Z}$, the $n$th *moment* of $X$ (or $F_X(x))$, $\mu_n'$ is
$$
\mu_n'=\mathrm{E} X^n
$$
The $n$th *central moment* of $X$, $\mu_n$ is
$$
\mu_n=\mathrm{E} (X - \mu)^n
$$
Note $\mu = \mu_1' = \mathrm{E}X$

The variance of $X$ is the 2nd central moment of $X$

#### 2.3.6
Let $X$ be a random variable with cdf $F_X$. The *moment generation function* (mgf) of $X$ (or $F_X$), denoted by $M_X(t)$, is
$$
M_X(t) = \mathrm{E} e^{tX}
$$
provided the expectation exists for $t$ in some neighborhood of $0$.

Explicitly, if $X$ is continuous
$$
M_X(t) = \int_{-\infty}^{\infty}e^{tx}f_X(x)\mathrm{d}x
$$
or if $X$ is discrete
$$
M_X(t) = \sum_{x}e^{tx}P(X=x)
$$

#### 2.3.7
If $X$ has mgf $M_X(t)$, then
$$
\mathrm{E}X^n = M_X^{(n)}(0)
$$
where
$$
M_X^{(n)}(0) = \frac{\mathrm{d}^n}{\mathrm{d}t^n}M_X(t)\bigg\rvert_{t=0}
$$
