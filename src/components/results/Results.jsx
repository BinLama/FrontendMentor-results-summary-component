import Summary from "../summary/Summary";
import { summaryResult } from "../../data";
import "./results.css";
import NumberIncrementing from "../NumberIncrementing";

const Results = () => {
    return (
        <main className="section section__center">
            <section className="results">
                <article className="results__score gradient__bg">
                    <p>Your Result</p>
                    <div className="results__score-points">
                        <NumberIncrementing />
                        <p className="results__score-points_total">of 100</p>
                    </div>
                    <div>
                        <h3>Great</h3>
                        <p className="results__score-summary">
                            You scored higher than 65% of the people who have
                            taken these tests.
                        </p>
                    </div>
                </article>
                <article className="results__summary">
                    <p>Summary</p>
                    <div className="results__summary-categories">
                        {summaryResult.map((result) => {
                            return <Summary key={result.type} {...result} />;
                        })}
                    </div>
                    <button className="btn">
                        <a
                            href="https://www.frontendmentor.io/home"
                            className="btn"
                        >
                            Continue
                        </a>
                    </button>
                </article>
            </section>
        </main>
    );
};
export default Results;