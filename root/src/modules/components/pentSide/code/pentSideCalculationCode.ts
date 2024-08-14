import IState from "../../../interfaces/IState";
import pentSideValidationCode from "./pentSideValidationCode";
import IPent from "../../../interfaces/IPent";
import IViewElement from "../../../interfaces/IViewElement";


let currentPageChildren: IViewElement[] = [];
let pages: IViewElement[] = [];

const addPage = (): void => {

    currentPageChildren = [];

    pages.push({
        type: 'page',
        properties: {},
        value: currentPageChildren
    });
}

const addUiElement = (
    type: string,
    value: string | null | Array<IViewElement>,
    properties: any | null = null
): void => {

    properties ?? {};

    currentPageChildren.push({
        type,
        properties,
        value
    });
}

const addUiChildElement = (
    parentArray: IViewElement[],
    type: string,
    value: string | null | Array<IViewElement>,
    properties: any | null = null
): void => {

    properties ?? {};

    parentArray.push({
        type,
        properties,
        value
    });
}

const calculateFrameUprightAdjustment = (
    horizontalDistanceFromFront: number,
    roofAngleRadians: number
): number => {

    const adjustment = horizontalDistanceFromFront * Math.tan(roofAngleRadians);

    return adjustment;
}

const printShiplapTimberRequirements = (
    printPanelName: string,
    shiplapButtingWidthInt: number,
    shiplapDepthInt: number
) => {

    addPage();

    if (printPanelName
        && printPanelName.length > 0) {

        addUiElement(
            'h1',
            `Panel ${printPanelName}`
        );
    }

    addUiElement(
        'h2',
        `Shiplap cutting list`
    );

    // Timber
    addUiElement(
        'h3',
        `Timber requirements:`,
        { class: 'top-padded' }
    );

    const children: Array<IViewElement> = [];

    addUiElement(
        'ul',
        children
    );

    addUiChildElement(
        children,
        'li',
        `Shiplap with a back butting width of ${shiplapButtingWidthInt}mm and depth of ${shiplapDepthInt}mm`
    );
};

const printShiplapCuttingList = (
    pent: IPent,
    printShiplapBoardCount: number,
    printFrameBottomLength: number,
    printPanelName = ""
) => {

    printShiplapTimberRequirements(
        printPanelName,
        pent.shiplapButtingWidth,
        pent.shiplapDepth
    );

    // Shiplap
    addUiElement(
        'h3',
        'Shiplap boards'
    );

    addUiElement(
        'p',
        'YY Cut both ends square.'
    );

    addUiElement(
        'p',
        `Cut ${printShiplapBoardCount} lengths at the following measurement:`
    );

    const children: Array<IViewElement> = [];

    addUiElement(
        'ul',
        children
    );

    addUiChildElement(
        children,
        'li',
        `${printFrameBottomLength}mm`
    );
};

const printCladdingInstructions = (
    pent: IPent,
    printPanelName: string
) => {

    addPage();

    if (printPanelName
        && printPanelName.length > 0) {

        addUiElement(
            'h1',
            `Panel ${printPanelName}`
        );
    }

    addUiElement(
        'h2',
        `Shiplap cladding instructions`
    );

    addUiElement(
        'p',
        `Start at the panel bottom and work upwards.`
    );

    addUiElement(
        'p',
        `On pent sides the shiplap finishes flush with the frame.`
    );

    addUiElement(
        'p',
        `The first board must overhang the bottom rail downwards by bottom overhang shown below. Use a set square to make sure this is the case at both ends of the board.`
    );

    addUiElement(
        'p',
        `Make sure all shiplap edges are flush with the frame before fixing.`
    );

    addUiElement(
        'p',
        `Nail one board at a time while pulling down hard against the already fixed boards - to prevent any gaps between the boards showing on the inside shed when finished.`
    );

    const children: Array<IViewElement> = [];

    addUiElement(
        'ul',
        children
    );

    addUiChildElement(
        children,
        'li',
        `bottom overhang: ${pent.shiplapBottomOverhang}mm`
    );
};

const printFrameAssemblyInstructions = (
    printPanelName: string
) => {

    addPage();

    if (printPanelName
        && printPanelName.length > 0) {

        addUiElement(
            'h1',
            `Panel ${printPanelName}`
        );
    }

    addUiElement(
        'h2',
        `Frame assembly instructions`
    );

    addUiElement(
        'p',
        `Sides should be mirror images - BEWARE - an all too easy mistake to make is to build them as identical instead.
The best way to prevent this mistake, and indeed cladding ones, is to assemble all 4 sides on top of the floor and then mark CLEARLY the faces that need cladding and any cladding overlaps.
If this is not possible, place the two sides on top of each other with the sides you want cladded facing up. Make sure the 2 top slopes point in opposite directions. Then mark CLEARLY the top face of each side as the one needing cladding.`
    );

    addUiElement(
        'p',
        `Make sure all edges are flush before fixing.`
    );

    addUiElement(
        'p',
        `Use 2 screws to fix each end of an upright to the top and bottom rails.`
    );

    addUiElement(
        'p',
        `When screwing the 2 outer frame uprights pilot the top and bottom rails first, otherwise the rails will split.`
    );

    addUiElement(
        'p',
        `When piloting the top frame rail remember it is angled, so drill at the same slant as the slant on the cut face.`
    );
};

const printFrameTimberRequirements = (
    printPanelName: string,
    framingSize: string
) => {

    addPage();

    if (printPanelName
        && printPanelName.length > 0) {

        addUiElement(
            'h1',
            `Panel ${printPanelName}`
        );
    }

    addUiElement(
        'h2',
        `Frame cutting list`
    );

    // Timber
    addUiElement(
        'h3',
        `Timber requirements:`,
        { class: 'top-padded' }
    );

    const children: Array<IViewElement> = [];

    addUiElement(
        'ul',
        children
    );

    addUiChildElement(
        children,
        'li',
        `${framingSize} framing`
    );
};

const printFrameBottom = (
    printCountLengths: string,
    printPanelFrameBottomLength: number,
    framingSize: string,
    printPanelName = "") => {

    printFrameTimberRequirements(
        printPanelName,
        framingSize
    );

    // Bottoms
    addUiElement(
        'h3',
        'Frame bottom'
    );
    addUiElement(
        'p',
        'Cut both ends square.'
    );
    addUiElement(
        'p',
        `Cut ${printCountLengths} of the following measurement:`
    );

    const children: Array<IViewElement> = [];

    addUiElement(
        'ul',
        children
    );

    addUiChildElement(
        children,
        'li',
        `${printPanelFrameBottomLength}mm`
    );
};

const printFrameTop = (
    printCountLengths: string,
    printPanelFrameTopLengthRoundedInt: number,
    roofAngleDegreesRounded: number,
    framingSize: string,
    printPanelName = "") => {

    printFrameTimberRequirements(
        printPanelName,
        framingSize
    );

    // Top
    addUiElement(
        'h3',
        'Frame top'
    );

    addUiElement(
        'p',
        `Cut both ends at an angle of ${roofAngleDegreesRounded}°.`
    );

    addUiElement(
        'p',
        'The angled ends must be parallel - ie face in the same direction.'
    );

    addUiElement(
        'p',
        `The angle should be on the shorter face of the framing - the depth.`
    );

    addUiElement(
        'p',
        `Cut ${printCountLengths} of the following measurement:`
    );

    const children: Array<IViewElement> = [];

    addUiElement(
        'ul',
        children
    );

    addUiChildElement(
        children,
        'li',
        `${printPanelFrameTopLengthRoundedInt}mm`
    );
};

const printUprights = (
    printCountLengths: string,
    printPanelUprights: Array<number>,
    roofAngleDegreesRounded: number,
    framingSize: string,
    printPanelName = "") => {

    printFrameTimberRequirements(
        printPanelName,
        framingSize
    );

    // Uprights
    addUiElement(
        'h3',
        'Frame uprights'
    );

    addUiElement(
        'p',
        `The top end will be cut at an angle, the bottom square.`
    );

    addUiElement(
        'p',
        `Start each length by cutting the top end at an angle of ${roofAngleDegreesRounded}°.`
    );

    addUiElement(
        'p',
        'Measure down from the peak of the angled cut and cut the bottom square.'
    );

    addUiElement(
        'p',
        `The angle should be on the shorter face of the framing - the depth.`
    );

    addUiElement(
        'p',
        `Cut ${printCountLengths} of the following measurements:`
    );

    const children: Array<IViewElement> = [];

    addUiElement(
        'ul',
        children
    );

    for (let i = 0; i < printPanelUprights.length; i++) {

        addUiChildElement(
            children,
            'li',
            `${printPanelUprights[i]}mm`
        );
    }
};

const printSpacers = (
    pent: IPent,
    printPanelAvailableLength: number,
    printHorizontalStudSpacer: number,
    framingSize: string,
    printPanelIndex = 0,
    printPanelName = ""
) => {

    if (printPanelAvailableLength > pent.maxStudDistance) {

        printFrameTimberRequirements(
            printPanelName,
            framingSize
        );

        // Spacer
        addUiElement(
            'h3',
            'Stud spacers'
        );

        addUiElement(
            'p',
            'Cut both ends square.'
        );

        if (printPanelIndex === 0) {

            addUiElement(
                'p',
                `Cut 2 lengths of the following measurement:`
            );
        }
        else {
            addUiElement(
                'p',
                `Use the 2 spacers already cut with the following measurement:`
            );
        }

        const children: Array<IViewElement> = [];

        addUiElement(
            'ul',
            children
        );

        addUiChildElement(
            children,
            'li',
            `${printHorizontalStudSpacer}mm`
        );
    }
};

const printPanel = (
    pent: IPent,
    printCountLengths: string, // sideCountLengths
    printPanelFrameBottomLength: number, //frameBottomLength
    printPanelFrameTopLengthRoundedInt: number, // panelFrameTopLengthRoundedInt
    printPanelUprights: Array<number>, //panelUprights
    printPanelAvailableLength: number, //panelAvailableLength
    printHorizontalStudSpacer: number, // horizontalStudSpacer
    printShiplapBoardCount: number,
    framingSize: string,
    roofAngleDegreesRounded: number,
    printPanelName = '',
    printPanelIndex = 0
) => {

    printFrameBottom(
        printCountLengths,
        printPanelFrameBottomLength,
        framingSize,
        printPanelName
    );

    printFrameTop(
        printCountLengths,
        printPanelFrameTopLengthRoundedInt,
        roofAngleDegreesRounded,
        framingSize,
        printPanelName
    );

    printUprights(
        printCountLengths,
        printPanelUprights,
        roofAngleDegreesRounded,
        framingSize,
        printPanelName
    );

    printSpacers(
        pent,
        printPanelAvailableLength,
        printHorizontalStudSpacer,
        framingSize,
        printPanelIndex,
        printPanelName
    );

    printFrameAssemblyInstructions(printPanelName);

    printShiplapCuttingList(
        pent,
        printShiplapBoardCount,
        printPanelFrameBottomLength,
        printPanelName
    );

    printCladdingInstructions(
        pent,
        printPanelName
    );
};

const pentSideCalculationCode = {

    calculate: (state: IState): void => {

        pentSideValidationCode.validateValues(state.pent);
        pages = [];
        currentPageChildren = [];

        const pent = state.pent;
        pent.floorDepth = pent.floorDepth ?? 0;
        pent.frontHeight = pent.frontHeight ?? 0;
        pent.backHeight = pent.backHeight ?? 0;

        const floorOverhang = pent.framingWidth > pent.framingSizePivot ? pent.floorOverhangHeavy : pent.floorOverhangStandard;
        const frameBottomLength = pent.floorDepth + (2 * floorOverhang);

        const framingSize = `${pent.framingWidth}mm x ${pent.framingDepth}mm`;


        // side sizes
        const adjustedFrameBottomLength = frameBottomLength - pent.framingWidth; // Because the roof rails will sit on the back of the front panels frame not the the front
        const triangleHeight = pent.frontHeight - pent.backHeight;
        const roofAngleRadians = Math.atan2(triangleHeight, adjustedFrameBottomLength);

        const heightAdjustmentInt = pent.framingWidth * Math.tan(roofAngleRadians);
        const adjustedFrontHeightInt = pent.frontHeight + heightAdjustmentInt;
        const adjustedTriangleHeight = triangleHeight + heightAdjustmentInt;

        const roofAngleDegreesRounded = Math.round(roofAngleRadians * 180 / Math.PI);

        const angleAdjustedFrameDepth = pent.framingDepth / Math.cos(roofAngleRadians);
        const angleAdjustedRailWidth = pent.roofRailWidth / Math.cos(roofAngleRadians);

        // side panel sizes
        const panelCountInt = Math.ceil(frameBottomLength / pent.maxPanelLength);
        // const panelFrameBottomLengthInt = Math.round(frameBottomLength / panelCountInt);
        const panelFrameTopLengthRoundedInt = Math.round(adjustedTriangleHeight / (Math.sin(roofAngleRadians) * panelCountInt));
        const sideFrameFrontLengthInt = adjustedFrontHeightInt - pent.framingDepth - angleAdjustedFrameDepth + angleAdjustedRailWidth;

        const panelAvailableLength = frameBottomLength - pent.framingDepth;
        const studDivisionCount = Math.floor(panelAvailableLength / pent.maxStudDistance) + 1;
        const horizontalSpacing = Math.round(panelAvailableLength / studDivisionCount);
        const horizontalStudSpacer = horizontalSpacing - pent.framingDepth;

        const spacingAdjustment = calculateFrameUprightAdjustment(
            horizontalSpacing,
            roofAngleRadians
        );

        const frameDepthAdjustment = calculateFrameUprightAdjustment(
            pent.framingDepth,
            roofAngleRadians
        );

        const shiplapBoardCounts: Array<number> = [];
        const sideUprights: Array<Array<number>> = [];
        let panelUprights: Array<number>;
        let runningAdjustment = 0;
        let uprightHeightRounded = 0;
        let shiplapBoardCount = 0;

        for (let i = 0; i < panelCountInt; i++) {

            panelUprights = [];

            for (let j = 0; j <= studDivisionCount; j++) {

                uprightHeightRounded = Math.round(sideFrameFrontLengthInt - runningAdjustment);

                if (j === 0) {

                    shiplapBoardCount = Math.ceil((uprightHeightRounded + pent.shiplapBottomOverhang) / pent.shiplapButtingWidth);
                    shiplapBoardCounts.push(shiplapBoardCount);
                }

                panelUprights.push(uprightHeightRounded);
                runningAdjustment += spacingAdjustment;
            }

            sideUprights.push(panelUprights);
            runningAdjustment += frameDepthAdjustment;
        }

        // Need to get them to label each part so there is no confusion
        // Also want to split it out in more pages to make it easier
        if (pent.buildPanelsTogether === true) {

            const lengthsCountInt = pent.sideCount * panelCountInt;
            let lengthsCount = `${lengthsCountInt} length`;

            if (lengthsCountInt > 1) {

                lengthsCount = `${lengthsCount}s`;
            }

            let sideShiplapBoardCount = 0;

            for (let m = 0; m < shiplapBoardCounts.length; m++) {

                sideShiplapBoardCount += shiplapBoardCounts[m];
            }

            printPanel(
                pent,
                lengthsCount,
                frameBottomLength,
                panelFrameTopLengthRoundedInt,
                sideUprights.flat(),
                panelAvailableLength,
                horizontalStudSpacer,
                sideShiplapBoardCount,
                framingSize,
                roofAngleDegreesRounded
            );
        }
        else {
            for (let k = 0; k < panelCountInt; k++) {

                let panelLengthsCount = `${pent.sideCount} length`;

                if (pent.sideCount > 1) {

                    panelLengthsCount = `${panelLengthsCount}s`;
                }

                printPanel(
                    pent,
                    panelLengthsCount,
                    frameBottomLength,
                    panelFrameTopLengthRoundedInt,
                    sideUprights[k],
                    panelAvailableLength,
                    horizontalStudSpacer,
                    shiplapBoardCounts[k],
                    framingSize,
                    roofAngleDegreesRounded,
                    `A${k + 1}`,
                    k
                );
            }
        }

        state.pages = pages;
        state.currentPageIndex = 0;
    }
};

export default pentSideCalculationCode;
