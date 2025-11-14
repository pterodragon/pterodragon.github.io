# Game Theory

## 3 Preliminaries

### 3.1 Normal-Form Games with Pure Strategies

#### Pure Strategy (Definition 3.2)
A **pure strategy** for player $i$ is a deterministic plan of action. The set of all **pure strategies** for player $i$ is denoted $S_i$. A **profile of pure strategies** $s=(s_1, s_2, \dots, s_n),s_i\in S_i \, \forall i = 1,2,\dots,n$ describes a particular combination of pure strategies chosen by all $n$ players in the game.

## 4 Rationality and Common Knowledge

### 4.1 Dominance in Pure Strategies

#### Strictly Dominated Strategy (Definition 4.1) 
Let $s_i \in S_i$ and $s_i'\in S_i$ be possible strategies for player $i$. We say $s_i'$ is **strictly dominated** by $s_i$ if for any combination of the other players' strategies, $s_{-i} \in S_{-i}$, players $i$'s payoff from $s_i'$ is strictly less than that from $s_i$:
$$
v_i(s_i, s_{-i}) > v_i'(s_i', s_{-i}) \quad \forall s_{-i} \in S_{-i}
$$
We write $s_i \succ_i s_i'$ to denote this.

#### Strictly Dominant Strategy (Definition 4.2)
$s_i\in S_i$ is a **strictly dominant strategy** for $i$ if every other strategy of $i$ is strictly dominated by it:
$$
v_i(s_i, s_{-i}) > v_i'(s_i', s_{-i}) \quad \forall s_i' \in S_{i} \setminus s_i \quad \forall s_{-i} \in S_{-i}
$$

## 5 Nash Equilibrium 

### 5.1 Nash Equilibrium in Pure Strategies

#### Nash Equilibrium (Definition 5.1)
The pure-strategy profile $s^* = (s_1^*, s_2^*, \dots, s_n^* ) \in S$ is a **Nash equilibrium** if $s_i^*$ is a best response to $s_{-i}^* \, \forall i \in N$:
$$
v_i(s_i^*, s_{-i}^*) \ge v_i'(s_i', s_{-i}^*) \quad \forall s_i' \in S_{i} \quad \forall i \in N
$$

## 6 Mixed Strategies

### 6.1 Strategies, Beliefs, and Expected Payoffs

#### Simplex, mixed strategy (Definition 6.1)
Let $S_i = {s_{i1}, s_{i2}, \dots, s_{im}}$ be player $i$'s finite set of pure strategies. Define $\Delta S_i$ as the **simplex** of $S_i$, which is the set of all probability distributions over $S_i$. A **mixed strategy** for player $i$ is an element $\sigma_i\in \Delta S_i$, s.t. $\sigma_i = \{\sigma_i({s_{i1}}), \sigma_i({s_{i2}}), \dots, \sigma_i({s_{im}})\}$ is a probability distribution over $S_i$, where $\sigma_i(s_i)$ is the probability that player $i$ plays $s_i$.

#### in the support of (Definition 6.2)
Given a mixed strategy $\sigma_i(\cdot)$ for player $i$, we say a pure strategy $s_i \in S_i$ is **in the support of** $\sigma_i(\cdot)$ if and only if it occurs with positive probability, i.e. $\sigma_i (s_i)>0$.

### 6.2 Mixed Strategy Nash Equilibrium

#### Nash Equilibrium (for mixed strategy) (Definition 6.6)
The mixed strategy profile $\sigma_i^* = (\sigma_1^*, \sigma_2^*, \dots, \sigma_n^*)$ is a *Nash equilibrium* if for each player $\sigma_i^*$ is a best response to $\sigma_{-i}^*$:
$$
v_i(\sigma_i^*,\sigma_{-i}^*)\ge v_i(\sigma_i, \sigma_{-i}^*) \quad \forall \sigma_i \in \Delta S_i \quad \forall i \in N
$$

#### Proposition 6.1 
If $\sigma^*$ is a Nash equilibrium, and both $s_i$ and $s_i'$ are in the support of $\sigma_i^*$, then
$$
v_i(s_i, \sigma_{-i}^*) = v_i(s_i', \sigma_{-i}^*) = v_i(\sigma_i^*, \sigma_{-i}^*)
$$
Meaning: If a player is randomizing between two alternatives then he must be indifferent between them.

## 7 Preliminaries (Dynamic games of incomplete information)

### 7.1 The Extensive-Form Game
In addition to the set of players and payoffs for each player as a function of outcomes, an extensive game also has the components of order of moves, action of players when they can move, the knowledge that players have when they can move, probability distributions over exogenous events, and all of these are common knowledge among all the players.

Players are allowed to condition their actions on paths taken on the game tree.

### 7.1.1 Game Trees

### Game tree (Definition 7.1)
A *game tree* is a set of node $x \in X$ with a precedence relation $x > x'$ meaning $x$ precedes $x'$. Every node in a game tree has only one predecessor. The *root* of the tree precedes all other nodes. Terminal nodes set are denoted as $Z \subset X$. Every node that is not a terminal node is assigned to a player $i(x)$, with the action $A_i(x)$ or to Nature.

### Information sets (Definition 7.2)
Every player $i$ has a collection of information sets $h_i \in H_i$ that partition the nodes of the game at which player $i$ moves with the following properties:

1. If $h_i$ is a singleton that includes only $x$ then player $i$ who moves at $x$ knows that he is at $x$
2. If $x \ne x'$ and if both $x \in h_i$ and $x' \in h_i$ then player $i$ who moves at $x$ does not know whether he is at $x$ or $x'$
3. If $x \ne x'$ and if both $x \in h_i$ and $x' \in h_i$ then $A_i(x') = A_i(x)$.

Meaning of 3.: Same action is applied to set of nodes in a game stage indistinguishable from each other

### 7.1.2 Imperfect versus Perfect Information

### Perfect Information (Definition 7.3)
A game of complete information in which every information set is a singleton and there are no moves of Nature is called a **game of perfect information**. Otherwise it is a **game of imperfect information**.

Uncertainty over the choice of Nature is called **exogenous uncertainty** and uncertainty over the choice of another player is called **endogenous uncertainty**.

### 7.2 Strategies and Nash Equilibrium

### 7.2.1 Pure Strategies

### Pure Strategies in Extensive-Form Games
A **pure strategy** for player $i$ is a *complete plan of play* that describes which pure action player $i$ will choose at each of his information sets.

### Pure Strategy (Definition 7.4)
A **pure strategy** for player $i$ is a mapping $s_i: H_i \rightarrow A_i$ that assigns an action $s_i(h_i) \in A_i(h_i)$ for every information set $h_i \in H_i$. We denote by $S_i$ the set of all pure-strategy mappings $s_i \in S_i$.

### 7.2.2 Mixed versus Behaviorial Strategies

### Mixed Strategies (Definition 7.5)
A **mixed strategy** for player $i$ is a probability distribution over his pure strategies $s_i \in S_i$.

The player selects a plan randomly *before the game is played* and then follows *a particular pure strategy*. (If-then cases strategies are not allowed)

### Behaviorial Strategies
A **behaviorial strategy** specifies for each information set $h_i \in H_i$ an independent probability distribution over $A_i(h_i)$ and is denoted by $\sigma_i : H_i \rightarrow \Delta A_i(h_i)$ where $\sigma_i(a_i(h_i))$ is the probability that player $i$ plays action $a_i(h_i) \in A_i(h_i)$ in information set $h_i$.

### 7.2.3 Normal-Form Representation of Extensive-Form Games
Any extensive-form game can be transformed into a normal-form game by using the set of pure strategies of the extensive form (Definition 7.4) as the set of pure strategies in the normal form.

### 7.3 Nash Equilibrium and Paths of Play 

### Equilibrium path (Definition 7.8)
Let $\sigma^* = (\sigma_1^*, \dots, \sigma_n^*)$ be a Nash Equilibrium profile of behaviorial strategies in an extensive-form game. We say an information set is **on the equilibrium path** if given $\sigma^*$ it is reached with positive probability. We say that an information set is **off the equilibrium path** if given $\sigma^*$ it is never reached.

In a Nash equilibrium players choose to proceed *on the equilibrium path* because of their beliefs about what the other players are doing *on and off the equilibrium path*. Example: Given the belief that the opponent is "threatening" to do a particular sequence of action (in all situations) no matter what and deviating from the corresponding optimal actions (off the equilibrium path) is worse off. However this belief might not be true and things might not unfold this way were the player to deviate so there needs to be a more refined type of equilibrium - the subgame-perfect equilibrium.

## 8 Credibility and Sequential Rationality

### 8.1 Sequential Rationality and Backward Induction

### Sequential rationality (Definition 8.1)
Given strategies $\sigma_{-i} \in \Delta S_{-i}$ of $i$'s opponent, we say $\sigma_i$ is **sequentially rational** if and only if $i$ is playing a best response to $\sigma_{-i}$ in each of his information sets.

### 8.2 Subgame-Perfect Nash Equilibrium: Concept

### Subgame (Definition 8.2)
A proper subgame $G$ of an extensive-form game $\Gamma$ consists of only a single node and all its successors in $\Gamma$ with the property that if $x \in G$ and $x' \in h(x)$ then $x' \in G$. The subgame $G$ is itself a *game tree* with its information sets and payoffs inherited from $\Gamma$.

### Subgame-perfect Nash equilibrium (Definition 8.3)
Let $\Gamma$ be an $n$-player extensive-form game. A behaviorial strategy profile $\sigma^* = (\sigma_1^*, \dots, \sigma_n^*)$ is a **subgame-perfect (Nash) equilibrium** if for every proper subgame $G$ of $\Gamma$ the restriction of $\sigma^*$ to $G$ is a Nash equilibrium in $G$.

Subgame perfection requires not only that a Nash equilibrium profile of strategies be a combination of best responses on the equilibrium path (necessary condition of Nash equilibrium), but also that the profile of strategies consist of mutual best responses **off the equilibrium path**. That is the restriction meaning $\sigma^*$ is a Nash equilibrium for every proper subgame including those not reached in equilibrium.

Not all Nash equilibria are necessarily subgame-perfect equilibria.

Fact: For any finite game of *perfect* information, the set of subgame-perfect Nash equilibria conincides with the set of Nash equilibria that survive backward induction.

## 9 Multistage Games

### 9.2 Payoffs
In a multistage game in which there are $T$ stage-games played in each of the periods $1,2,\dots,T$. Let $v_i^t$ be player $i$'s payoff from the anticipated outcome in the stage-game played in period $t$. We denote by $v_i$ the *total payoff* of player $i$ from playing the sequence of games in the multistage game and define it as:
$$
v_i = v_i^1+\delta v_i^2+\delta^2 v_i^3+\dots+\delta^{T-1} v_i^T = \sum_{t=1}^T \delta^{t-1}v_i^t
$$

$\delta \in [0, 1]$ is the discount factor.

### 9.4 Subgame-Perfect equilibria
Summary:
In a multistage game, 
1. treating each stage of the game as an independent game and looking at a sequence of play that is a Nash equilibrium yields a subgame-perfect equilibrium (Proposition 9.1)
2. if $\sigma^*$ is a Nash equilibrium of the multistage game, then $\sigma^*$ must have specified the Nash equilibrium of the last stage game. (Proposition 9.2)
3. if the finite multistage game consists of stage-games that each have a unique Nash equilibrium then the multistage game has a unique subgame-perfect equilibrium. (Proposition 9.3)
4. If the stage-game played at the end has more than one Nash equilibrium, then it might be possible to have a subgame-perfect equilibrium that supports behaviors that deviate from the Nash equilibrium of the standalone version of the stage-game. In this case there must be two distinct Nash equilibria in some stage that has a "carrot" and "stick" and the discount factor has to be large enough.

### 9.5 The One-Stage Deviation Principle
To check if a proposed strategy was a subgame-perfect equilibrium, think of the problem as a single-player decision problem that the player $i$ needs to play a best response to $\sigma_{-i}$ in every subgame. So we need to check if he is playing an optimal action in each of his information sets, *taking the actions of all other players $\sigma_{-i}$ as given*. Once $\sigma_{-i}$ of other players in the extensive-form are fixed, player $i$ solves a standard dynamic programming (backward induction) problem.

In the single-player problem, treat $h_i$ as a node in the decision tree induced by $\sigma_{-i}$, we can define $v_i(\sigma_i, h_i)$ to be the expected payoff of player $i$ from the information set $h_i$ onward by playing $\sigma_i$ (with $\sigma_{-i}$ being fixed). A strategy $\sigma_i$ is *optimal* if there is no strategy $\sigma_i'$ and information set $h_i$ s.t. $v_i(\sigma_i', h_i) > v_i(\sigma_i, h_i)$.

Given a strategy $\sigma_i$, define the strategy $\sigma_i^{a,h_i}$ as the strategy that is identical to $\sigma_i$ everywhere except at $h_i$, and at $h_i$ we substitute the prescribed (possibly random) action of $\sigma_i$ with the action $a \in A_i(h_i)$.

### One-stage unimprovable (Definition 9.1)
A strategy $\sigma_i$ is **one-stage unimprovable** if there is no information set $h_i$, action $a \in A_i(h_i)$, and corresponding strategy $\sigma_i^{a, h_i}$ s.t. $v_i(\sigma_i^{a, h_i}, h_i) > v_i(\sigma_i, h_i)$

Clearly an optimal strategy is one-stage unimprovable. The converse is stated next.

### Theorem 9.1
A one-stage unimprovable strategy must be optimal.
