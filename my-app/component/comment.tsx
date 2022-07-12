import React from "react";
import styled from "styled-components";
import Image from "next/image";

/* 루트 컨테이너 */
interface CommentProps {
  /*some props*/
  children?: React.ReactNode | React.ReactNode[];
}

const CommentStyle = styled.div`
  /* some style*/
`;

function Comment(props: CommentProps) {
  return <CommentStyle {...props}>{props.children}</CommentStyle>;
}

/* 인풋 창 */
interface LoginInputInputBoxProps /*extends HTMLInputElement*/ {
  autoComplete?: string;
  disabled?: boolean;
  isHidden?: boolean;
  isDisplayNone?: boolean;
  width?: string;
  height?: string;
  placeholder?: string;
  placeholderFontSize?: string;
  placeholderFontWeight?: string;
  border?: string;
  borderRadius?: string;
  focusBorder?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  caretColor?: string;
  lineHeight?: string;
  margin?: string;
  padding?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  onKeyDown?: (e: any) => void;
  onClick?: () => void;
}

const InputBoxStyle = styled(Input)<LoginInputInputBoxProps>`
  &.signup {
    ::-webkit-credentials-auto-fill-button {
      visibility: hidden;
      position: absolute;
      right: 0;
    }

    padding: ${(props) => (props.padding ? props.padding : "0 16px")};
    font-size: ${(props) => (props.fontSize ? props.fontSize : "15px")};
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
    width: ${(props) => (props.width ? props.width : "283px")};
    height: ${(props) => (props.height ? props.height : "48px")};
    border: ${(props) =>
      props.border ? props.border : `2px solid ${COLOR.GREY3}`};
    border-radius: ${(props) =>
      props.borderRadius ? props.borderRadius : "8px"};
    caret-color: ${(props) =>
      props.caretColor ? props.caretColor : "#181D1F"};
    color: ${(props) => (props.color ? props.color : COLOR.GREY12)};
    line-height: ${(props) => (props.lineHeight ? props.lineHeight : "20px")};
    letter-spacing: -0.6px;
    -webkit-transition: 0.4s ease-out;
    -moz-transition: 0.4s ease-out;
    -o-transition: 0.4s ease-out;
    -ms-transition: 0.4s ease-out;
    transition: 0.4s ease-out;

    -webkit-transition-property: border;
    -moz-transition-property: border;
    -o-transition-property: border;
    -ms-transition-property: border;
    transition-property: border;

    &:focus {
      border: ${(props) =>
        props.focusBorder ? props.focusBorder : "2px solid #898F94"};
    }

    &:hover {
      background-color: white;
    }

    &:disabled {
      background-color: #f1f3f6;
      color: #aaafb9;
    }

    ::placeholder {
      font-size: ${(props) =>
        props.placeholderFontSize ? props.placeholderFontSize : "15px"};
      font-weight: ${(props) =>
        props.placeholderFontWeight ? props.placeholderFontWeight : "500"};
      line-height: 19px;
      font-color: ${COLOR.GREY5};
      letter-spacing: -0.6px;
    }

    font-family: ${(props) => props.id === "password" && "Verdana"};
    letter-spacing: ${(props) => props.id === "password" && "0.125em"};

    /*
        &[type='password'] {
            font-family: helvetica;
            font-size: 25px;
        }
        */
  }
`;

const LoginInputInputBox = React.forwardRef<
  HTMLInputElement,
  LoginInputInputBoxProps
>((props, ref) => {
  const { value, ...InputBoxProps } = props;
  return (
    <InputBoxStyle
      ref={ref}
      value={value}
      {...InputBoxProps}
      className={"signup"}
    />
  );
});

/* 좌측 아이콘 버튼 */
interface LoginInputIconProps {
  right?: string;
  top?: string;
  isHidden?: boolean;
  buttonImageUrl: string;
  buttonImageWidth?: number;
  buttonImageHeight?: number;
  onClick?: () => void;

  children?: React.ReactNode;
}

const IconStyle = styled.div<{
  isHidden: boolean | undefined;
  right: string | undefined;
  top: string | undefined;
}>`
  visibility: ${(props) => props.isHidden && "hidden"};
  position: absolute;
  right: ${(props) => props.right};
  top: ${(props) => props.top};
`;

function LoginInputIconButton(props: LoginInputIconProps) {
  return (
    <IconStyle right={props.right} top={props.top} isHidden={props.isHidden}>
      {props.children}
      <Image
        unoptimized
        src={props.buttonImageUrl}
        width={props.buttonImageWidth}
        height={props.buttonImageHeight}
        onClick={props.onClick}
        onMouseDown={(e) => e.preventDefault()}
      />
    </IconStyle>
  );
}

/* 경고 메시지 영역*/
interface WarningAreaProps {
  display: boolean;
  children?: React.ReactNode;
}

const WarningAreaStyle = styled.div<{ isDisplayNone: boolean }>`
  font-size: 12px;
  line-height: 15px;
  font-weight: 500;
  display: flex;
  justify-content: spance-between;
  display: ${(props) => props.isDisplayNone && "none"};
`;

function LoginInputWarningArea(props: WarningAreaProps) {
  return (
    <WarningAreaStyle isDisplayNone={!props.display}>
      {props.children}
    </WarningAreaStyle>
  );
}

/* 붉은색 경고 메시지 */
interface WarningTextProps {
  text: string | any;
  display?: boolean;
}

const WarningTextStyle = styled(Text)<{ isDisplayNone: boolean }>`
  color: ${COLOR.CORAL3};
  text-align: left;
  margin-top: 12px;
  display: ${(props) => props.isDisplayNone && "none"};
`;

function LoginInputWarningText(props: WarningTextProps) {
  return (
    <WarningTextStyle
      isDisplayNone={props.display !== undefined ? !props.display : false}
    >
      {props.text}
    </WarningTextStyle>
  );
}

/* 밑줄 경고 메시지 */
interface UnderLinedTextProps {
  text: string | any;
  display?: boolean;
}

const UnderLinedTextStyle = styled.div<{ isDisplayNone: boolean }>`
  color: ${COLOR.GREY7};
  text-decoration: underline;
  margin-top: 12px;
  margin-left: auto;
  display: ${(props) => props.isDisplayNone && "none"};
`;

function LoginInputUnderLinedText(props: UnderLinedTextProps) {
  return (
    <UnderLinedTextStyle
      isDisplayNone={props.display !== undefined ? !props.display : false}
    >
      {props.text}
    </UnderLinedTextStyle>
  );
}

/* 자동 완성 영역*/
interface LoginInputAutoCompleteProps /*extends HTMLAttribute<HTMLDivElement>*/ {
  isHidden: boolean;
  onMouseLeave: () => void;

  children?: React.ReactNode;
}

const LoginInputAutoCompleteWrapper = styled.div<{ isHidden: boolean }>`
  position: absolute;
  width: 400px;
  height: 210px;
  border: 1.5px solid ${COLOR.GREY4};
  font-size: 12px;
  line-height: 15px;
  font-weight: 500;
  z-index: 1000;
  margin-top: 6px;
  border-radius: 6px;
  visibility: ${(props) => props.isHidden && "hidden"};
  background: ${COLOR.BG};

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${COLOR.GREY5}; /* 스크롤바의 색상 */
    background-clip: padding-box;
    height: 80px;
    border-radius: 50px;
  }

  ::-webkit-scrollbar-track {
    margin: 7px 0 7px 0;
    background: transparent;
  }
`;

function LoginInputAutoComplete(props: LoginInputAutoCompleteProps) {
  return (
    <LoginInputAutoCompleteWrapper
      isHidden={props.isHidden}
      onMouseLeave={props.onMouseLeave}
    >
      {props.children}
    </LoginInputAutoCompleteWrapper>
  );
}

/* 자동 완성 항목*/
interface LoginInputAutoCompleteElemProps {
  onMouseOver: (e: React.MouseEvent) => void;
  onMouseDown: () => void;
  isSelected: boolean;
  index: number;
  text: string;
}

const LoginInputAutoCompleteElemStyle = styled.div<{ isSelected: boolean }>`
  width: 393px;
  height: 48px;

  font-size: 15px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: -0.6px;
  color: ${COLOR.GREY7};

  padding: 14px 15px 15px 15px;
  background-color: ${(props) => (props.isSelected ? COLOR.GREY1 : "white")};
  position: relative;

  :before {
    content: "";
    position: absolute;
    left: 11px;
    bottom: 0;
    height: 1px;
    width: 376px;
    border-bottom: 1px solid #e9ebee;
  }
`;

function LoginInputAutoCompleteElem(props: LoginInputAutoCompleteElemProps) {
  return (
    <LoginInputAutoCompleteElemStyle
      data-option-index={props.index}
      onMouseOver={props.onMouseOver}
      onMouseDown={props.onMouseDown}
      isSelected={props.isSelected}
    >
      {props.text}
    </LoginInputAutoCompleteElemStyle>
  );
}

const Root = LoginInput;
const InputBox = LoginInputInputBox;
const IconButton = LoginInputIconButton;
const WarningArea = LoginInputWarningArea;
const WarningText = LoginInputWarningText;
const UnderLinedText = LoginInputUnderLinedText;
const AutoComplete = LoginInputAutoComplete;
const AutoCompleteElem = LoginInputAutoCompleteElem;

export {
  Root,
  InputBox,
  IconButton,
  WarningArea,
  WarningText,
  UnderLinedText,
  AutoComplete,
  AutoCompleteElem,
};
