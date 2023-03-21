import express, { Request, Response } from "express";
//usecases
import GroupUseCases from "../../application/gorup.usecases";
//repository
import GroupRepository from "../../domain/group.repository";
import GroupRepositoryPostgres from "../db/group.repository.postgres";
//domain
import Group from "../../domain/Group";
//context:
import { isAuth } from "../../../context/security/auth";
import Auth from "../../../users/domain/Auth";
//Router:
const router = express.Router()
//Implementation
const groupRepository: GroupRepository = new GroupRepositoryPostgres()
const groupUseCases: GroupUseCases = new GroupUseCases(groupRepository)
//Petitions:
router.get("/", async (req: Request, res: Response) => {
  try {
    const result: any = await groupUseCases.getAll()
    res.json(result)
  } catch (error) {
    const stringResp: String = String(error)
    res.status(500).send(stringResp)
    }
})

router.get("/pattern/:pattern", async (req: Request, res: Response) => {
  try {
    const pattern = req.params.pattern
    const result: any = await groupUseCases.getFromPattern(pattern)
    res.json(result)
  } catch (error) {
    const stringResp: String = String(error)
    res.status(500).send(stringResp)
    }
})

router.post("/create", async (req: Request, res: Response) => {
  try {
    const group: Group = {
      admin: req.body.admin,
      name: req.body.name,
      sport: req.body.sports
    }
    const result = await groupUseCases.create(group)    
    res.json(result)
  } catch (error) {
    const stringResp: String = String(error)
    res.status(500).send(stringResp)
  }
})

router.post("/addUser", async (req: Request, res: Response) => {
  try {
    const userid = req.body.userid
    const groupid = req.body.groupname  //It works with the group name
    const result = await groupUseCases.addUser(Number(userid), groupid)  
    res.json(result)
  } catch (error) {
    const stringResp: String = String(error)
    res.status(500).send(stringResp)
  }
})

export { router as routerGroup };