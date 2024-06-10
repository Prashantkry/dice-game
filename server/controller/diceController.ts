import express from "express";
import { UserModel, getUserByEmail } from "../model/userSchema";

export const diceController = async (req: express.Request, res: express.Response) => {
    try {
        const { emailData, dice1, dice2, betAmount, betOption } = req.body;
        // console.log("emailData -> ", emailData, "dice1 -> ", dice1, "dice2 -> ", dice2, "betAmount -> ", betAmount, "betOption -> ", betOption)
        const email = emailData
        if (!email || !dice1 || !dice2 || !betAmount || !betOption) {
            return res.sendStatus(500);
        }
        const foundData = await getUserByEmail(email)
        if (!foundData) {
            return res.sendStatus(500);
        }
        // console.log("foundData -> ", foundData)

        const ObtainedPoints = +foundData.TotalPoints
        // console.log("ObtainedPoints -> ", ObtainedPoints)

        let newPoints = 0
        let wonAmount = 0
        let message

        // bet won start
        let diceValue = dice1 + dice2
        if (diceValue > 7 && betOption > 7) { // double
            // console.log("bet won")
            wonAmount = betAmount * 2
            message = `Its Incredible you won ${wonAmount} points`
            newPoints = ObtainedPoints + wonAmount
        } else if (betOption === diceValue && diceValue === 7) { // 5 times
            wonAmount = betAmount * 5
            message = `Congratulation Its huge victory you won ${wonAmount} points`
            newPoints = ObtainedPoints + wonAmount
        } else {
            // console.log("bet incredible")  // double
            wonAmount = betAmount * 2
            message = `Its Incredible you won ${wonAmount} points`
            newPoints = ObtainedPoints + wonAmount
        }
        // bet won end

        // console.log("newPoints -> ", newPoints)

        const updateQuery = {
            $set: {
                TotalPoints: newPoints
            }
        }

        const updatedData = await UserModel.findOneAndUpdate({ email }, updateQuery)
        // console.log("updatedData -> ", updatedData)

        return res.status(200).json({ message, wonAmount, newPoints }).end();
    } catch (error) {
        // console.log(error);
        return res.sendStatus(400);
    }
}