import { inject, injectable } from "inversify";
import { AnimationRepository } from "../repository/animation-repository";
import { Animation } from "../dto/animation";


@injectable()
class AnimationService {

  @inject("AnimationRepository")
  private animationRepository:AnimationRepository

  constructor() { }

  async get(_id: string): Promise<Animation> {
    return this.animationRepository.get(_id)
  }

}


export { AnimationService }

