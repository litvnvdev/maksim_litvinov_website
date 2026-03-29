import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { IoOpenOutline } from "react-icons/io5";

import type { PortfolioProject } from "../../shared/portfolioProjects";

import {
  Body,
  CloseButton,
  Dialog,
  ExternalLink,
  Footer,
  Media,
  MetaBlock,
  MetaLabel,
  MetaPanel,
  ModalTitle,
  Overlay,
  StackChip,
  StackRow,
  TeamText,
} from "./styles";

type PortfolioModalProps = {
  project: PortfolioProject | null;
  onClose: () => void;
};

export function PortfolioModal({ project, onClose }: PortfolioModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const mediaSrc = project.modalSrc ?? project.previewSrc;
  const titleId = `portfolio-modal-${project.id}`;

  return createPortal(
    <Overlay role="presentation" onClick={onClose}>
      <Dialog
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close project details"
        >
          ×
        </CloseButton>
        <ModalTitle id={titleId}>{project.title.trim()}</ModalTitle>
        <Media
          src={mediaSrc}
          alt={`${project.title.trim()} preview`}
          loading="eager"
          decoding="async"
        />
        <Body>{project.description}</Body>
        <MetaPanel>
          <MetaBlock>
            <MetaLabel>Team</MetaLabel>
            <TeamText>{project.team}</TeamText>
          </MetaBlock>
          <MetaBlock>
            <MetaLabel>Technical stack</MetaLabel>
            <StackRow>
              {project.stack.map((item) => (
                <StackChip key={item}>{item}</StackChip>
              ))}
            </StackRow>
          </MetaBlock>
        </MetaPanel>
        {project.link && (
          <Footer>
            <ExternalLink
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.linkLabel ?? "Open link"}
              <IoOpenOutline aria-hidden size={18} />
            </ExternalLink>
          </Footer>
        )}
      </Dialog>
    </Overlay>,
    document.body,
  );
}
