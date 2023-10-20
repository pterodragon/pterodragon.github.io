import signal_processing_md from './assets/md/signal_processing/main.md?raw'
import partial_differential_equations_md from './assets/md/partial_differential_equations/main.md?raw'
import pde_math_review_md from './assets/md/partial_differential_equations/math_review.md?raw'
import computer_networking_md from './assets/md/computer_networking/main.md?raw'
import control_theory_md from './assets/md/control_theory/main.md?raw'
import control_theory_math_review_md from './assets/md/control_theory/math_review.md?raw'
import statistics_md from './assets/md/statistics/main.md?raw'
import stochastic_calculus_md from './assets/md/stochastic_calculus/main.md?raw'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeMathjax from 'rehype-mathjax'
import remarkGfm from 'remark-gfm'

import 'katex/dist/katex.min.css'

import {Route, Routes, Link} from "react-router-dom";


const Home = () => <h1>Home</h1>;
const PDE_Md = () => (<article><ReactMarkdown
    children={partial_differential_equations_md}
    remarkPlugins={[remarkMath, remarkGfm]}
    rehypePlugins={[rehypeMathjax]}
/></article>);
const PDE_math_review_Md = () => (<article><ReactMarkdown
    children={pde_math_review_md}
    remarkPlugins={[remarkMath]}
    rehypePlugins={[rehypeKatex]}
/></article>);
const SignalProcessingMd = () => (<article><ReactMarkdown
    children={signal_processing_md}
    remarkPlugins={[remarkMath]}
    rehypePlugins={[rehypeKatex]}
/></article>);
const ComputerNetworkingMd = () => (<article><ReactMarkdown
    children={computer_networking_md}
    remarkPlugins={[remarkMath]}
    rehypePlugins={[rehypeKatex]}
/></article>);
const ControlTheoryMd = () => (<article><ReactMarkdown
    components={{
        img: ({node, ...props}) => <img style={{
            maxWidth:
                props.alt == 'block_diagram_series' ? '30%' :
                    props.alt == 'block_diagram_parallel' ? '20%' :
                        props.alt == 'block_diagram_feedback' ? '25%' :
                          props.alt == 'block_diagram_pid' ? '70%' :
                            '40%'
        }}{...props} />
    }}
    children={control_theory_md}
    remarkPlugins={[remarkMath]}
    rehypePlugins={[rehypeKatex]}
/></article>);
const ControlTheoryMathReviewMd = () => (<article><ReactMarkdown
    children={control_theory_math_review_md}
    remarkPlugins={[remarkMath]}
    rehypePlugins={[rehypeKatex]}
/></article>);
const StatisticsMd = () => (<article><ReactMarkdown
    children={statistics_md}
    remarkPlugins={[remarkMath]}
    rehypePlugins={[rehypeKatex]}
/></article>);
const StochasticCalculusMd = () => (<article><ReactMarkdown
    children={stochastic_calculus_md}
    remarkPlugins={[remarkMath]}
    rehypePlugins={[rehypeKatex]}
/></article>);

const routes = [
    {
        path: "/*",
        main: () => <Home />,
        sidebar: () => (
            <p>
                My notes when I studied various things (Sorry no blogs)
            </p>
        )
    },
    {
        path: "/signal-processing-md",
        main: () => <SignalProcessingMd />,
        sidebar: () => (
            <p>
                signal processing md
            </p>
        )
    },
    {
        path: "/partial-differential-equations-md",
        main: () => <PDE_Md />,
        sidebar: () => (
            <p>
                partial differential equations md
            </p>
        )
    },
    {
        path: "/pde-math-review-md",
        main: () => <PDE_math_review_Md />,
        sidebar: () => (
            <p>
                PDE math review md
            </p>
        )
    },
    {
        path: "/computer-networking-md",
        main: () => <ComputerNetworkingMd />,
        sidebar: () => (
            <p>
                computer networking md
            </p>
        )
    },
    {
        path: "/control-theory-md",
        main: () => <ControlTheoryMd />,
        sidebar: () => (
            <p>
                control theory md
            </p>
        )
    },
    {
        path: "/control-theory-math-review-md",
        main: () => <ControlTheoryMathReviewMd />,
        sidebar: () => (
            <p>
                control theory math review md
            </p>
        )
    },
    {
        path: "/statistics-md",
        main: () => <StatisticsMd />,
        sidebar: () => (
            <p>
                statistics md
            </p>
        )
    },
    {
        path: "/stochastic-calculus-md",
        main: () => <StochasticCalculusMd />,
        sidebar: () => (
            <p>
                stochastic calculus md
            </p>
        )
    }
];

export default function App() {
    return (
        <div>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/signal-processing-md">Signal processing md</Link>
                    </li>
                    <li>
                        <Link to="/partial-differential-equations-md">Partial differential equations md</Link>
                    </li>
                    <li>
                        <Link to="/pde-math-review-md">PDE math review md</Link>
                    </li>
                    <li>
                        <Link to="/computer-networking-md">Computer networking md</Link>
                    </li>
                    <li>
                        <Link to="/control-theory-md">Control theory md</Link>
                    </li>
                    <li>
                        <Link to="/control-theory-math-review-md">Control theory math review md</Link>
                    </li>
                    <li>
                        <Link to="/statistics-md">Statistics md</Link>
                    </li>
                </ul>
                <Routes>
                    {routes.map(({path, sidebar}) => (
                        <Route key={path} path={path} element={sidebar()} />
                    ))}
                </Routes>
            </div>

            <Routes>
                {routes.map(({path, main}) => (
                    <Route key={path} path={path} element={main()} />
                ))}
            </Routes>
        </div>
    );
}
