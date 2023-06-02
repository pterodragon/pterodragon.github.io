# Math review

## Least squares

The least squares solution of $Ax=b$ is the solution of the normal equations
$$
A^TA\hat{x}=A^T b \Leftrightarrow A^T(A\hat{x} - b)=0
$$

note: in general $A$ is rectangular and is not invertible. There's no solution when $A^TA$ is not invertible.

The 1D normal equation is $ a^T (a\hat{x} - b) = 0 $ which says the error $a\hat{x} - b$ is orthogonal to $a$.

For the matrix equation above, the error $A\hat{x} - b$ is orthogonal to each column $a_i$ of $A$. i.e. $ a_i^T(A\hat{x} - b) = 0 $

## Complex analysis
### Cauchy's integral theorem
If $f(z)$ is holomorphic in a simply connected domain $\Omega$, then for any simply closed contour $C$ in $\Omega$ 
$$
\oint_C f(z)\mathrm{d}z=0
$$

### Cauchy's integral formula
If $f$ is holomorphic in an open set that contains the closure of a disc $D$, and $\partial D$ is of positive orientation,
$$
f(z) = \frac{1}{2\pi i}\oint_{\partial D} \frac{f(\zeta)}{\zeta-z} \mathrm{d}\zeta, \qquad \forall z\in D
$$

### Residue
If $f$ is holomorphic in a connected open set $\Omega$ except it has a pole of order $n$ at $z_0 \in \Omega$, then
$$
f(z) = \frac{a_{-n}}{(z-z_0)^{n}} + \frac{a_{-n + 1}}{(z-z_0)^{n - 1}} + \dots + \frac{a_{-1}}{(z-z_0)} + G(z) 
$$
where $G(z)$ is a holomorphic function in a neighborhood of $z_0$

$\mathrm{Res}_{z_0}f = a_{-1}$ is the residue of $f$ at $z_0$

### The Residue formula
Suppose $f$ is holomorphic in an open set containing a circle $C$ and its interior, except for a pole at $z_0$ inside $C$. Then
$$
\frac{1}{2\pi i} \oint_C f(z)\mathrm{d}z = \mathrm{Res}_{z_0}f
$$

Suppose $f$ is holomorphic in an open set containing a simply closed contour $\gamma$ and its interior, except for some poles at $z_0, \dots, z_N$ inside $\gamma$. Then
$$
\frac{1}{2\pi i} \oint_{\gamma} f(z)\mathrm{d}z = \sum_{k=1}^{N}\mathrm{Res}_{z_k}f
$$

### Local description of a holomorphic function near a zero
Suppose $f$ is a holomorphic in a connected open set $\Omega$ and it has a zero at a point $z_0 \in \Omega$, and is not identically zero in $\Omega$. Then there exists a neighborhood $U \subset \Omega$ of $z_0$, a non-vanishing holomorphic function $g$ on $U$, and a unique positive integer $n$ s.t.
$$
f(z) = (z-z_0)^ng(z),\qquad \forall z\in U
$$

### Meromorphic functions
A function $f$ on an open set $\Omega$ is meromorphic if there exists a sequence of points $\{z_0,z_1,z_2,\dots\}$ that has no limit points in $\Omega$ and s.t.

(i) the function $f$ is holomorphic in $\Omega - \{z_0,z_1,z_2,\dots\}$ and

(ii) $f$ has poles at the points $\{z_0,z_1,z_2,\dots\}$

### Winding number
The winding number of a closed curve $\gamma$ around a point $z \notin \gamma$ is
$$
W_\gamma(z) = \frac{1}{2\pi i} \int_\gamma \frac{\mathrm{d}\zeta}{\zeta-z}
$$

### Argument principle
Suppose $f$ is meromorphic in an open set containing a circle $C$ and its interior. If $f$ has no poles or zeros on $C$, then
$$
- \frac{1}{2\pi i} \oint_C \frac{f'(z)}{f(z)}\mathrm{d}z = \frac{1}{2\pi i} \oint_C \frac{\mathrm{d}}{\mathrm{d}z}(\log (f(z))\mathrm{d}z = \frac{1}{2\pi} \Delta_C \arg (f(z)) = Z - P
$$
where $Z$ and $P$ is the number of zeros and poles respectively inside $C$. $\Delta_C$ is the variation of the angle when $z$ traverses $C$ in the **clockwise** direction. $Z - P$ is the winding number of $C$ around the origin.
