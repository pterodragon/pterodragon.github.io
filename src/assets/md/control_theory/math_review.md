# Math review

## Least squares

The least squares solution of $Ax=b$ is the solution of the normal equations
$$
A^TA\hat{x}=A^T b \Leftrightarrow A^T(A\hat{x} - b)=0
$$

note: in general $A$ is rectangular and is not invertible. There's no solution when $A^TA$ is not invertible.

The 1D normal equation is $ a^T (a\hat{x} - b) = 0 $ which says the error $a\hat{x} - b$ is orthogonal to $a$.

For the matrix equation above, the error $A\hat{x} - b$ is orthogonal to each column $a_i$ of $A$. i.e. $ a_i^T(A\hat{x} - b) = 0 $
