import React, { useState, useEffect, useRef } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'


// TODO: fix the scrolling for monthly sub price
const items = [
    {
        src: 'https://picsum.photos/id/382/1920/600',
        altText: 'Slide 1',
        caption: 'We all have family members that we would like to know better -or even to simply meet -',
        key: 1,
    },
    {
        src: 'https://picsum.photos/id/242/1920/600',
        altText: 'Slide 2',
        caption: 'Slide 2',
        key: 2,
    },
    {
        src: 'https://picsum.photos/id/190/1920/600',
        altText: 'Slide 3',
        caption: 'Slide 3',
        key: 3,
    },
    {
        src: 'https://picsum.photos/id/512/1920/600',
        altText: 'Slide 4',
        caption: 'Slide 4',
        key: 4,
    },
    {
        src: 'https://picsum.photos/id/177/1920/600',
        altText: 'Slide 5',
        caption: 'Slide 5',
        key: 5,
    },
];

const How = () => {
    const [state, setState] = useState(5)
    const [step, setStep] = useState(15)
    const [sep, setSep] = useState(0)
    const ref = useRef(null);

    useEffect(() => {
        const rangeLinePadding = 16;
        const calcStep =
            (ref.current.offsetWidth - rangeLinePadding) / (ref.current.max - ref.current.min);
        setSep(calcStep);
    }, []);

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const gotoIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex)
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption
                    captionText={item.caption}
                // captionHeader={item.caption}
                />
            </CarouselItem>
        );
    });



    const handleRange = (e) => {
        console.log(e.target.value)
        setState(e.target.value)
    }

    const handleStep = (e) => {
        console.log(ref.current)
        console.log(e.target.value)
        console.log(sep)
        setStep(e.target.value)
    }

    let navigate = useNavigate()
    return (
        <div className='container-fluid bg-danger w-100 p-0'>
            <nav className='navbar navbar-expand-lg bg-info sticky-top'>
                <div className='container-fluid ms-5 justify-content-start'>
                    <button onClick={() => navigate(-1)} className="btn text-white  w-10 me-2">
                        <BsArrowLeft className='mb-1 p-0' style={{ "width": "100%", "height": "auto", "fontSize": "20px" }} />
                    </button>
                    <Link to={`/`} className="navbar-brand text-white" >OnlyFams</Link>


                </div>

            </nav>

            <div className='container px-5 content'>
                <div className='container-fluid mt-4'>
                    <h2>How it works</h2>
                    <hr className='short-line' />
                </div>

                <div className='container-fluid'>
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                        fade={true}
                        className=""
                    >
                        <CarouselIndicators
                            items={items}
                            activeIndex={activeIndex}
                            onClickHandler={gotoIndex}
                        />
                        {slides}
                        <CarouselControl
                            direction='prev'
                            directionText='Previous'
                            onClickHandler={previous}
                        />
                        <CarouselControl
                            direction="next"
                            directionText='Next'
                            onClickHandler={next}
                        />
                    </Carousel>
                </div>
                <hr />
                <div className='container-fluid'>
                    <h1>Monthly subscription price?</h1>
                    <FormGroup>
                        <Label for="familyRange">
                            # of family members?
                        </Label>
                        <div>
                            <span className='test' style={{ transform: `translateX(${state * 10}px)` }}>{state}</span>
                        </div>
                        <Input
                            id='familyRange'
                            name="range"
                            type="range"
                            min={0}
                            max={100}
                            step={5}
                            defaultValue={5}
                            onChange={handleRange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="priceRange">
                            Monthly subscription price?
                        </Label>
                        <div>
                            <span className='test' style={{ transform: `translateX(${step * 0}px)` }}>{step}</span>
                        </div>
                        <Input
                            id='priceRange'
                            name="range"
                            type="range"
                            min={4.99}
                            max={50}
                            step={0.01}
                            defaultValue={0}
                            ref={ref}
                            onChange={handleStep}
                        />
                    </FormGroup>
                </div>
            </div>
        </div>
    )
}

export default How;