import * as babel from 'babel-core'
import * as postcss from 'postcss'
import { Request } from '../class'
import { RequestType } from '../declare'

import t = babel.types

/**
 * 依赖类型集合
 */
export type Depend = Depend.Script | Depend.Style | Depend.Wxc | Depend.Wxp | Depend.Json

export namespace Depend {

  /**
   * 依赖JS类型的接口
   *
   * @export
   * @interface Script
   * @extends {Request.Default}
   */
  export interface Script extends Request.Default {
    requestType: RequestType.SCRIPT
    $node: t.StringLiteral // for babel
  }

  /**
   * 依赖json类型的接口
   *
   * @export
   * @interface Json
   * @extends {Request.Default}
   */
  export interface Json extends Request.Default {
    requestType: RequestType.STATIC,
    $node: t.StringLiteral // for babel
  }

  /**
   * 依赖STYLE类型的接口
   *
   * @export
   * @interface Style
   * @extends {Request.Default}
   */
  export interface Style extends Request.Default {
    requestType: RequestType.STYLE
    $atRule: postcss.AtRule // for postcss
  }

  /**
   * 依赖WXC类型的接口
   *
   * @export
   * @interface Wxc
   * @extends {Request.Default}
   */
  export interface Wxc extends Request.Default {
    requestType: RequestType.WXC
    usingKey: string // for wxc
  }

  /**
   * 依赖WXP类型的接口
   *
   * @export
   * @interface Wxp
   * @extends {Request.Default}
   */
  export interface Wxp extends Request.Default {
    requestType: RequestType.WXP
    usingKey: string // for wxp
  }
}
