### Math review

Useful:
https://en.wikipedia.org/wiki/Vector_calculus_identities


#### Cross product
$$ \mathbf{a} \times \mathbf{b} = \|\mathbf{a}\| \|\mathbf{b}\| \sin(\theta) \mathbf{\hat{n}}
$$

where $\mathbf{\hat{n}}$ is a unit vector $\bot$ to the plane containing $\mathbf{a}$ and $\mathbf{b}$ according to right-hand rule

$$
\mathbf{a} \times \mathbf{b} = \begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
a_1 & a_2 & a_3 \\
b_1 & b_2 & b_3 \\
\end{vmatrix}
$$


##### properties
$$
\boxed{\mathbf{a} \times \mathbf{b} = - ( \mathbf{b} \times \mathbf{a} )}, \boxed{\mathbf{a} \times \mathbf{a} = \mathbf{0}}
$$

$$
\boxed{\mathbf{i} \times \mathbf{j} = \mathbf{k}}, \boxed{\mathbf{j} \times \mathbf{k} = \mathbf{i}}, \boxed{\mathbf{k} \times \mathbf{i} = \mathbf{j}}
$$

#### Gradient
$$
\nabla f = \sum_{i = 1}^{n} \frac{\partial f}{\partial x_i} \hat{x_i} = \frac{\partial f}{\partial \mathbf{x}}
$$

$\nabla f(\mathbf{x})$ gives the direction of largest increase and its magnitude gives the rate of increase

$S: f(x, y) = 0 \Rightarrow \nabla f$ gives the normal to the surface S. 

#### Directional derivatives
$$
\nabla_{\mathbf{v}} f(\mathbf{x}) = \mathbf{v}\cdot \frac{\partial f(\mathbf{x})}{\partial\mathbf{x}} = \mathbf{v}\cdot \nabla f
$$

Taking $\mathbf{v} = \langle1, 0, 0\rangle$ gives $\frac{\partial f}{\partial x_1}$. Directional derivative is a weighted sum of partial derivatives w.r.t. $x_i$

Normal derivative (normal to a surface $S$ etc.):
$$
\frac{\partial f}{\partial \mathbf{n}} = \mathbf{n}\cdot\frac{\partial f}{\partial \mathbf{x}} = \mathbf{n}\cdot\nabla f
$$

#### Change of coordinate system

##### Spherical coordinate
$$
(x, y, z) = (r\sin\theta\cos\phi, r\sin\theta\sin\phi,r\cos\theta) \newline
(r, \theta, \phi) = (\sqrt{x^2+y^2+z^2}, \arccos\frac{z}{\sqrt{x^2+y^2+z^2}},\arctan{\frac{y}{x}})
$$

$$
\nabla f=\frac{\partial f}{\partial r}\mathbf{\hat r}+\frac{1}{r}\frac{\partial f}{\partial \theta}\hat{\boldsymbol{\theta}}+\frac{1}{r^2\sin\theta}\frac{\partial f}{\partial \phi}\hat{\boldsymbol{\phi}}
$$

Derivation ref: https://physics.stackexchange.com/questions/78510/derive-vector-gradient-in-spherical-coordinates-from-first-principles

#### Divergence
$$
\mathrm{div} \ \mathbf{F} = \nabla \cdot \mathbf{F}
$$

$\nabla \cdot \mathbf{F}|_{\mathbf{x}_0} > 0$ means there's positive flow outwards at $\mathbf{x}_0$

#### Curl
$$
\mathrm{curl} \ \mathbf{F} = \nabla \times \mathbf{F}
$$

$$
\nabla \times \mathbf{F} =
\begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
F_x & F_y & F_z
\end{vmatrix}
$$

#### Line integral
$$
\int_{\mathcal{C}} F(\mathbf{r})\mathrm{d}s=\int_a^b F(\mathbf{r}(t))|\mathbf{r}'(t)|\mathrm{d}t
$$

where $\mathbf{r}: [a, b] \rightarrow \mathcal{C}$ is a bijective parametrization of $\mathcal{C}$
##### Gradient theorem (fundamental theorem of line integral)
$$
\int_a^b\nabla F(\mathbf{r}(t))\cdot \mathrm{d}\mathbf{r}=F(\mathbf{r}(b))-F(\mathbf{r}(a))
$$

Note: $\mathrm{d}\mathbf{r} = \mathbf{r}'(t)\mathrm{d}t$

#### Green's theorem
$$
\iint_{D} \bigg(\frac{\partial{M}}{\partial{x}}-\frac{\partial{L}}{\partial{y}}\bigg) \mathrm{d}x\mathrm{d}y= \oint_{\partial D} L \mathrm{d}x+M\mathrm{d}y
$$
Intepretation: macroscopic circulation around $\partial D$ is the same as sum of microscopic circulation inside $D$ 


#### Divergence theorem
$$
\iiint_{D} \nabla \cdot \mathbf{F} \ \mathrm{d}V = \oiint_{\partial{D}}\big( \mathbf{F} \cdot \mathbf{\hat{n}} \big) \mathrm{d}S
$$

$\mathbf{\hat{n}}$ is the outward-pointing unit normal vector to the surface $\partial{D}$

Picking the normal to be $\langle \mathrm{d}y, -\mathrm{d}x, 0\rangle$, we get the Green's theorem for the 2D case

#### Stoke's theorem

$$
\iint_{\Sigma} \big(\nabla \times \mathbf{F}\big)\cdot \mathrm{d} \mathbf{S} =\iint_{\Sigma} \big(\nabla \times \mathbf{F}\big)\cdot \mathbf{\hat{n}} \ \mathrm{d} S = \oint_{\partial \Sigma} \mathbf{F} \cdot \mathrm{d} \mathbf{r}
$$

where $\mathbf{r}$ is tangential to the curve $\partial \Sigma$, $\mathbf{\hat{n}}$ is the outward-pointing unit normal vector to the surface $\Sigma$ 

Setting $\mathbf{k}=0$, we get Green's theorem. Stoke's theorem is just Green's theorem with a 2D surface floating in a 3D surface not necessarily on the x-y plane

##### Ref:
Green's theorem, Divergence theorem, and Stoke's theorem
https://www.youtube.com/watch?v=PIoqMNL7tV0&list=PLHXZ9OQGMqxfW0GMqeUE1bLKaYor6kbHa&index=39


#### Types of convergence
##### Pointwise convergece
Let $f_n(x): I \rightarrow \real, n\ge0$ be a sequence of functions, then

$f_n(x)$ converges pointwise on $I$ $\Leftrightarrow$ $f_n(x_0)$ converges $\forall x_0 \in I$

The limit is defined by
$$
f(x_0) = \lim_{n\rightarrow \infty}f_n(x_0), \quad x_0 \in I \newline
f(x) = \lim_{n\rightarrow \infty}f_n(x), \quad x \in I; \newline
f_n(x) \rightarrow f(x) \quad \text{on}\  I
$$

##### Uniform convergece
Let $f_n(x): I \rightarrow \real, n\ge0$ be a pointwise convergent sequence of functions, and $f(x) = \lim_{n\rightarrow\infty}f_n(x)$ on $I$

$f_n(x)$ converges uniformly on $I$ to $f(x)$, i.e. $f_n(x) \rightrightarrows f(x)$ on $I$ $\Leftrightarrow$ on $I$,
$$
\epsilon > 0, n \gg 1 \Rightarrow |f_n(x)-f(x)| < \epsilon
$$

$n \gg 1$ means for some $n > N_\epsilon$ depending only on $\epsilon$ *but not $x$*
