### Math review

Useful:
https://en.wikipedia.org/wiki/Vector_calculus_identities


#### Cross product
$$ \bf{a} \times \bf{b} = \|\bf{a}\| \|\bf{b}\| \sin(\theta) \bf{\hat{n}}
$$

where $\bf{\hat{n}}$ is a unit vector $\bot$ to the plane containing $\bf{a}$ and $\bf{b}$ according to right-hand rule

$$
\bf{a} \times \bf{b} = \begin{vmatrix}
\bf{i} & \bf{j} & \bf{k} \\
a_1 & a_2 & a_3 \\
b_1 & b_2 & b_3 \\
\end{vmatrix}
$$


##### properties
$$
\boxed{\bf{a} \times \bf{b} = - ( \bf{b} \times \bf{a} )}, \boxed{\bf{a} \times \bf{a} = \bf{0}}
$$

$$
\boxed{\bf{i} \times \bf{j} = \bf{k}}, \boxed{\bf{j} \times \bf{k} = \bf{i}}, \boxed{\bf{k} \times \bf{i} = \bf{j}}
$$

#### Gradient
$$
\nabla f = \sum_{i = 1}^{n} \frac{\partial f}{\partial x_i} \hat{x_i} = \frac{\partial f}{\partial \bf{x}}
$$

$\nabla f(\bf{x})$ gives the direction of largest increase and its magnitude gives the rate of increase

$S: f(x, y) = 0 \Rightarrow \nabla f$ gives the normal to the surface S. 

#### Directional derivatives
$$
\nabla_{\bf{v}} f(\bf{x}) = \bf{v}\cdot \frac{\partial f(\bf{x})}{\partial\bf{x}} = \bf{v}\cdot \nabla f
$$

Taking $\bf{v} = \langle1, 0, 0\rangle$ gives $\frac{\partial f}{\partial x_1}$. Directional derivative is a weighted sum of partial derivatives w.r.t. $x_i$

Normal derivative (normal to a surface $S$ etc.):
$$
\frac{\partial f}{\partial \bf{n}} = \bf{n}\cdot\frac{\partial f}{\partial \bf{x}} = \bf{n}\cdot\nabla f
$$

#### Change of coordinate system

##### Spherical coordinate
$$
(x, y, z) = (r\sin\theta\cos\phi, r\sin\theta\sin\phi,r\cos\theta) \newline
(r, \theta, \phi) = (\sqrt{x^2+y^2+z^2}, \arccos\frac{z}{\sqrt{x^2+y^2+z^2}},\arctan{\frac{y}{x}})
$$

$$
\nabla f=\frac{\partial f}{\partial r}\hat\bf{r}+\frac{1}{r}\frac{\partial f}{\partial \theta}\hat{\boldsymbol{\theta}}+\frac{1}{r^2\sin\theta}\frac{\partial f}{\partial \phi}\hat{\boldsymbol{\phi}}
$$

Derivation ref: https://physics.stackexchange.com/questions/78510/derive-vector-gradient-in-spherical-coordinates-from-first-principles

#### Divergence
$$
\mathrm{div} \ \bf{F} = \nabla \cdot \bf{F}
$$

$\nabla \cdot \bf{F}|_{\bf{x}_0} > 0$ means there's positive flow outwards at $\bf{x}_0$

#### Curl
$$
\mathrm{curl} \ \bf{F} = \nabla \times \bf{F}
$$

$$
\nabla \times \bf{F} =
\begin{vmatrix}
\bf{i} & \bf{j} & \bf{k} \\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
F_x & F_y & F_z
\end{vmatrix}
$$

#### Line integral
$$
\int_{\mathcal{C}} F(\bf{r})\mathrm{d}s=\int_a^b F(\bf{r}(t))|\bf{r}'(t)|\mathrm{d}t
$$

where $\bf{r}: [a, b] \rightarrow \mathcal{C}$ is a bijective parametrization of $\mathcal{C}$
##### Gradient theorem (fundamental theorem of line integral)
$$
\int_a^b\nabla F(\bf{r}(t))\cdot \mathrm{d}\bf{r}=F(\bf{r}(b))-F(\bf{r}(a))
$$

Note: $\mathrm{d}\bf{r} = \bf{r}'(t)\mathrm{d}t$

#### Green's theorem
$$
\iint_{D} \bigg(\frac{\partial{M}}{\partial{x}}-\frac{\partial{L}}{\partial{y}}\bigg) \mathrm{d}x\mathrm{d}y= \oint_{\partial D} L \mathrm{d}x+M\mathrm{d}y
$$
Intepretation: macroscopic circulation around $\partial D$ is the same as sum of microscopic circulation inside $D$ 


#### Divergence theorem
$$
\iiint_{D} \nabla \cdot \bf{F} \ \mathrm{d}V = \oiint_{\partial{D}}\big( \bf{F} \cdot \bf{\hat{n}} \big) \mathrm{d}S
$$

$\bf{\hat{n}}$ is the outward-pointing unit normal vector to the surface $\partial{D}$

Picking the normal to be $\langle \mathrm{d}y, -\mathrm{d}x, 0\rangle$, we get the Green's theorem for the 2D case

#### Stoke's theorem

$$
\iint_{\Sigma} \big(\nabla \times \bf{F}\big)\cdot \mathrm{d} \bf{S} =\iint_{\Sigma} \big(\nabla \times \bf{F}\big)\cdot \bf{\hat{n}} \ \mathrm{d} S = \oint_{\partial \Sigma} \bf{F} \cdot \mathrm{d} \bf{r}
$$

where $\bf{r}$ is tangential to the curve $\partial \Sigma$, $\bf{\hat{n}}$ is the outward-pointing unit normal vector to the surface $\Sigma$ 

Setting $\bf{k}=0$, we get Green's theorem. Stoke's theorem is just Green's theorem with a 2D surface floating in a 3D surface not necessarily on the x-y plane

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
