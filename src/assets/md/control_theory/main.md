# Control Theory

## Math review
see `math_review.md`

## Kalman filter

Problem setup:
$$
y=W\beta +\varepsilon
$$

Optimal estimate: $\hat{\beta}=Ky$ where $K_{m\times n}$

Each row of $K$ should satisfy the normal equations corresponding to project $\beta_i$ onto $y_i$, specifically:
$$
Ky=
\begin{bmatrix}
\text{--}k^T_1\text{--} \\
\vdots \\
\text{--}k^T_i\text{--} \\
\vdots \\
\text{--}k^T_n\text{--}
\end{bmatrix}
\begin{bmatrix}
y_1 \\
\vdots \\
y_i \\
\vdots \\
y_n
\end{bmatrix}
=
\begin{bmatrix}
\beta_1 \\
\vdots \\
\beta_i \\
\vdots \\
\beta_n
\end{bmatrix}
=
\beta
$$

and $\text{error}_i = \beta_i - \hat{\beta_i} = \beta_i - k^T_i y$ should be orthogonal to each $y_j$ (orthogonality principle):
$$
(\beta_i - k^T_i y|y_j)=0
$$
