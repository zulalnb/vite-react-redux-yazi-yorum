import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Modal } from "semantic-ui-react";
import { deletePost } from "../actions";

const DeleteModal = ({ post }) => {
  const [open, setOpen] = useState(false);
  const error = useSelector((state) => state.deletePostError);
  const show = () => setOpen(true);
  const close = () => setOpen(false);
  const { push } = useHistory();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deletePost(id, close, push));
  };

  return (
    <React.Fragment>
      <Button color="red" onClick={show}>
        Sil
      </Button>
      <Modal size="mini" open={open} onClose={close}>
        <Modal.Header>Yazıyı Sil</Modal.Header>
        <Modal.Content>
          <p>
            <b>{post.title}</b> başlıklı yazıyı silmek istediğinizden emin
            misiniz?
          </p>
          {error && <p>{error}</p>}
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={close}>
            İptal Et
          </Button>
          <Button
            positive
            icon="delete"
            labelPosition="right"
            content="Evet, Sil!"
            onClick={() => handleDelete(post.id)}
          />
        </Modal.Actions>
      </Modal>
    </React.Fragment>
  );
};

export default DeleteModal;
