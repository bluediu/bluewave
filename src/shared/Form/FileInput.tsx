/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";

/* Libs components */
import { Button, Header, Icon, Image, Label, Segment } from "semantic-ui-react";

/* Hooks */
import { useField } from "formik";
import { useDropzone } from "react-dropzone";

interface IProps {
  disabled: boolean;
  helpText?: string;
  label: string;
  name: string;
  required: boolean;
  type: string;
  [x: string]: any;
}

export const FileInput = ({ label, helpText, ...props }: IProps) => {
  const [field, meta] = useField(props);
  // Get image full url.
  const image = `${import.meta.env.VITE_API_URL}/${field.value}`;

  const [previewImage, setPreviewImage] = useState<string | null>(
    field.value ? image : null,
  );

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      field.onChange({ target: { name: field.name, value: file } });
      setPreviewImage(URL.createObjectURL(file));
    },
    [field],
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpge"],
      "image/jpg": [".jpg"],
      "image/webp": [".webp"],
    },
    noKeyboard: true,
    multiple: false,
    onDrop,
  });

  return (
    <div className="required field">
      <label>{label}</label>
      <Segment placeholder className="file-input-bg">
        {previewImage ? (
          <article className="text-center d-flex justify-content-center">
            <Image src={previewImage} rounded size="medium" />
          </article>
        ) : (
          <Header icon>
            <Icon name="image" />
            No image has been uploaded.
          </Header>
        )}

        {meta.touched && meta.error && (
          <Label basic color="red" pointing="below">
            {meta.error}
          </Label>
        )}
        <div className={previewImage ? "mt-5" : ""}>
          <Button
            type="button"
            fluid
            // @ts-expect-error This is necessary to suppress TypeScript error for color prop.
            color={previewImage ? "yellow" : "blue"}
            {...getRootProps()}
          >
            {previewImage ? "Change Image" : "Upload Image"}
          </Button>
          <input {...getInputProps()} />
        </div>
      </Segment>

      {helpText && (
        <div style={{ marginBottom: "1rem" }}>
          <small className="help_text_color">{helpText}</small>
        </div>
      )}
    </div>
  );
};
